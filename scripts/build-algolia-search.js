"use strict";

const dotenv = require("dotenv");
const fs = require('fs');
const path = require('path');
const matter = require("gray-matter");
const algoliasearch = require("algoliasearch");

dotenv.config();

const client = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.ALGOLIA_ADMIN_KEY
);

// Use environment variable for CONTENT_PATH, with a fallback
const CONTENT_PATH = process.env.DOCS_PATH || path.join(process.cwd(), 'docs');
const MAX_RECORD_SIZE = 8000; // Keeping some buffer below the 10KB limit

function convertFilePathToUrl(filePath) {
    const basePath = '/docs';
    let relativePath = path.relative(CONTENT_PATH, filePath)
        .replace(/\\/g, '/')       // Convert Windows backslashes to forward slashes
        .replace(/\.mdx?$/, '')    // Remove .md or .mdx file extensions
        .replace(/\/index$/, '');  // Remove /index from the end of paths

    // Handle case sensitivity and repetitive segments
    const pathSegments = relativePath.split('/').reduce((acc, segment, index, array) => {
        // Only add the segment if it's not the same as the previous one
        if (index === 0 || segment.toLowerCase() !== array[index - 1].toLowerCase()) {
            acc.push(encodeURIComponent(segment)); // Ensure URL encoding
        }
        return acc;
    }, []);

    const finalPath = pathSegments.join('/');

    // Return the final URL
    return `${basePath}/${finalPath}`.replace(/\/+/g, '/');  // Ensure no duplicate slashes
}

function getMdxFiles(dirPath) {
    if (!fs.existsSync(dirPath)) {
        console.error(`Directory does not exist: ${dirPath}`);
        return [];
    }
    let files = [];
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) {
            files = files.concat(getMdxFiles(fullPath));
        } else if (/\.(md|mdx)$/.test(entry.name)) {
            files.push(fullPath);
        }
    }
    return files;
}

function splitContent(content) {
    const chunks = [];
    let currentChunk = '';
    content.split('\n').forEach(line => {
        if ((currentChunk + line).length > MAX_RECORD_SIZE) {
            if (currentChunk) {
                chunks.push(currentChunk);
                currentChunk = '';
            }
            // If a single line is too long, split it
            while (line.length > MAX_RECORD_SIZE) {
                chunks.push(line.slice(0, MAX_RECORD_SIZE));
                line = line.slice(MAX_RECORD_SIZE);
            }
        }
        currentChunk += line + '\n';
    });
    if (currentChunk) {
        chunks.push(currentChunk);
    }
    return chunks;
}

function processContent(content, data, filePath) {
    const sections = content.split(/^##\s/m).filter(Boolean);
    let records = [];

    sections.forEach((section, sectionIndex) => {
        const [title, ...contentParts] = section.split('\n');
        const sectionContent = contentParts.join('\n').trim();

        // Split the section content into subsections
        const subsections = sectionContent.split(/^###\s/m).filter(Boolean);

        subsections.forEach((subsection, subsectionIndex) => {
            const [subtitle, ...subcontentParts] = subsection.split('\n');
            const subsectionContent = subcontentParts.join('\n').trim();

            const chunks = splitContent(subsectionContent);

            chunks.forEach((chunk, chunkIndex) => {
                records.push({
                    objectID: `${path.relative(CONTENT_PATH, filePath).replace(/\\/g, '/').replace(/\..+$/, '')}-${sectionIndex}-${subsectionIndex}-${chunkIndex}`,
                    title: title.trim(),
                    subtitle: subtitle ? subtitle.trim() : null,
                    content: chunk,
                    description: chunk.slice(0, 150) + '...',
                    url: convertFilePathToUrl(filePath) + 
                         (sectionIndex > 0 ? `#${title.toLowerCase().replace(/\s+/g, '-')}` : '') +
                         (subtitle ? `-${subtitle.toLowerCase().replace(/\s+/g, '-')}` : ''),
                    ...data,
                    hierarchy: {
                        lvl0: data.category || 'Documentation',
                        lvl1: data.title || path.basename(filePath, path.extname(filePath)),
                        lvl2: title.trim(),
                        lvl3: subtitle ? subtitle.trim() : null
                    },
                    sectionIndex: sectionIndex,
                    subsectionIndex: subsectionIndex,
                    chunkIndex: chunkIndex
                });
            });
        });
    });

    return records;
}

async function getAllMdxData() {
    const files = getMdxFiles(CONTENT_PATH);
    let records = [];

    for (const filePath of files) {
        try {
            const source = fs.readFileSync(filePath, 'utf8');
            const { content, data } = matter(source);
            records = records.concat(processContent(content, data, filePath));
        } catch (error) {
            console.error(`Error processing file ${filePath}:`, error);
        }
    }

    return records;
}

async function configureAlgoliaIndex() {
    const index = client.initIndex("coreumDocs");

    try {
        await index.setSettings({
            searchableAttributes: [
                'unordered(title)',
                'unordered(subtitle)',
                'unordered(description)',
                'unordered(content)'
            ],
            attributesToSnippet: ['description:50', 'content:50'],
            attributesForFaceting: ['hierarchy.lvl0', 'hierarchy.lvl1', 'hierarchy.lvl2', 'hierarchy.lvl3'],
            distinct: true,
            attributeForDistinct: 'url'
        });
        console.log('Algolia index settings updated successfully');
    } catch (error) {
        console.error('Error updating Algolia index settings:', error);
        throw error;
    }
}

async function pushDataToAlgolia() {
    console.log(`Searching for MDX files in: ${CONTENT_PATH}`);
    console.log(`Current working directory: ${process.cwd()}`);

    try {
        const docs = await getAllMdxData();
        const index = client.initIndex("coreumDocs");

        await configureAlgoliaIndex();

        const { objectIDs } = await index.saveObjects(docs);
        console.log('Documents added to Algolia', objectIDs);
    } catch (error) {
        console.error('Error in pushDataToAlgolia:', error);
        throw error;  // Re-throw the error to be caught by the global handler
    }
}

// Global unhandled rejection handler
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Execute the main function
pushDataToAlgolia().catch(error => {
    console.error('Error in main execution:', error);
    process.exit(1);
});