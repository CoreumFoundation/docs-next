import * as fs from 'fs';
import axios from 'axios';

interface Page {
  page: string;
  source: string;
}

interface Category {
  [key: string]: Page[];
}

const generatePages = async () => {
  const args = process.argv.slice(2);
  const override = args.includes('--override') || args.includes('-o');

  try {
    // Read sources.json file
    const sourcesData = fs.readFileSync('./sources.json', 'utf-8');
    const categories: Category = JSON.parse(sourcesData);

    // Iterate over categories
    for (const categoryName in categories) {
      const pages = categories[categoryName];

      // Iterate over pages in each category
      for (const page of pages) {
        const { page: pageName, source } = page;
        const pageDir = `./app/docs/next/${categoryName}/${pageName}`;
        const pagePath = `${pageDir}/${pageName}.mdx`;
        const pageComponentPath = `${pageDir}/page.tsx`;

        let pageContent = '';

        if (source.length) {
          try {
            const pageContentResponse = await axios.get(source);
            pageContent = pageContentResponse.data;

            pageContent = pageContent.replace(/<!--/g, '{/*');
            pageContent = pageContent.replace(/-->/g, '*/}');
            pageContent = pageContent.replace(/\/{/g, '/{`');
            pageContent = pageContent.replace(/}\//g, '`}/');
            pageContent = pageContent.replace(/} \|/g, '`} |');

            pageContent = pageContent.replace(/<=/g, '`\<\=`');
            pageContent = pageContent.replace('<this-command>', '\<this-command\>');

            // custom link handle
            pageContent = pageContent.replace(
              /\[README-update-service\.md\]\(README-update-service\.md\)/g,
              '<a href="/docs/next/core-dex/api-server/update-service" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">Update service</a>'
            );
            pageContent = pageContent.replace(
              /\(https:\/\/golang\.org\/dl\/\)/g,
              '<a href="https://golang.org/dl/" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">https://golang.org/dl/</a>'
            );
            pageContent = pageContent.replace(
              /\(https:\/\/dev\.mysql\.com\/downloads\/\)/g,
              '<a href="https://dev.mysql.com/downloads/" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">https://dev.mysql.com/downloads/</a>'
            );
            pageContent = pageContent.replace(
              /\[Coreum\]\(https:\/\/docs\.coreum\.dev\/docs\/next\/nodes-and-validators\/run-full-node\)/g,
              '<a href="/docs/next/nodes-and-validators/run-full-node" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">Coreum</a>q'
            );
            pageContent = pageContent.replace(
              /\[Price And Amount Limits\]\(price-and-amount-limits\.md\)/g,
              '<a href="/docs/next/modules/coreum-dex/prices-and-limits" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">Price And Amount Limits</a>'
            );
            pageContent = pageContent.replace(
              /\[event\.proto\]\(\.\.\/\.\.\/\.\.\/proto\/coreum\/dex\/v1\/event\.proto\)/g,
              '<a href="https://github.com/CoreumFoundation/coreum/blob/master/proto/coreum/dex/v1/event.proto" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">event.proto</a>'
            );
            pageContent = pageContent.replace(
              /\[\`price_tick\`\]\(https:\/\/www\.investopedia\.com\/terms\/t\/tick\.asp\)/g,
              '<a href="https://www.investopedia.com/terms/t/tick.asp" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">price_tick</a>'
            );
            pageContent = pageContent.replace(
              /\[🔗 Price Tick Calculator Spreadsheet\]\(https:\/\/docs\.google\.com\/spreadsheets\/d\/1UL9Ni6VP_fmrXw4lv6snPcNyBTGYFFF085jGheivs9A\)/g,
              '<a href="https://docs.google.com/spreadsheets/d/1UL9Ni6VP_fmrXw4lv6snPcNyBTGYFFF085jGheivs9A" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">🔗 Price Tick Calculator Spreadsheet</a>'
            );
            pageContent = pageContent.replace(
              /\[Investopedia: Price Tick\]\(https:\/\/www\.investopedia\.com\/terms\/t\/tick\.asp\)/g,
              '<a href="https://www.investopedia.com/terms/t/tick.asp" target="_blank" className="text-[#25D695] hover:opacity-80 text-base font-bold">Investopedia: Price Tick</a>'
            );
            pageContent = pageContent.replace(
              /- \[Binance Trading Limits\]\(https:\/\/www\.binance\.us\/trade-limits\)/g,
              ''
            );
            pageContent = pageContent.replace(
              /\[link\]\(https:\/\/docs\.docker\.com\/engine\/install\/\)/g,
              '<a href="https://docs.docker.com/engine/install/" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">link</a>'
            );
            pageContent = pageContent.replace(
              /\[\!\[coreum-wasm-sdk on crates\.io\]\(https:\/\/img\.shields\.io\/crates\/v\/coreum-wasm-sdk\.svg\)\]\(https:\/\/crates\.io\/crates\/coreum-wasm-sdk\) \[\!\[Docs\]\(https:\/\/docs\.rs\/coreum-wasm-sdk\/badge\.svg\)\]\(https:\/\/docs\.rs\/coreum-wasm-sdk\)/g,
              `<div className="flex items-center gap-2 my-2">
    <a href="https://crates.io/crates/coreum-wasm-sdk" target="_blank">
        <img src="https://img.shields.io/crates/v/coreum-wasm-sdk.svg" alt="coreum-wasm-sdk on crates.io" />
    </a>
    <a href="https://docs.rs/coreum-wasm-sdk" target="_blank">
        <img src="https://docs.rs/coreum-wasm-sdk/badge.svg" alt="Docs" />
    </a>
</div>`);
            pageContent = pageContent.replace(
              /\[coreum-rust-protobuf\]\(https:\/\/github\.com\/CoreumFoundation\/coreum-rust-protobuf\)/g,
              '<a href="https://github.com/CoreumFoundation/coreum-rust-protobuf" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">coreum-rust-protobuf</a>'
            );
            pageContent = pageContent.replace(
              /\[coreum-test-tube\]\(https:\/\/github\.com\/CoreumFoundation\/test-tube\)/g,
              '<a href="https://github.com/CoreumFoundation/test-tube" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">coreum-test-tube</a>'
            );
            pageContent = pageContent.replace(
              /\[Coreum Website\]\(https:\/\/coreum\.com\)/g,
              '<a href="https://coreum.com" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">Coreum Website</a>'
            );
            pageContent = pageContent.replace(
              /\[Coreum Documentation\]\(https:\/\/docs\.coreum\.dev\)/g,
              '[Coreum Documentation](/)'
            );
            pageContent = pageContent.replace(
              /\[Smart contract examples\]\(https:\/\/github\.com\/CoreumFoundation\/coreum\/tree\/master\/integration-tests\/contracts\)/g,
              '<a href="https://github.com/CoreumFoundation/coreum/tree/master/integration-tests/contracts" target="_blank" rel="noopener noreferrer" className="text-[#25D695] hover:opacity-80 text-base font-bold">Smart contract examples</a>'
            );
          } catch (err) {
            console.log('err');
          }
        } else {
          continue;
        }

        const mdxExists = fs.existsSync(pagePath);
        const tsxExists = fs.existsSync(pageComponentPath);

        if (!override && (mdxExists || tsxExists)) {
          console.error(
            `Skipping '${pageName}' in '${categoryName}': files already exist. ` +
            `Use --override to overwrite.`
          );
          continue;
        }

        fs.mkdirSync(pageDir, { recursive: true });
        fs.writeFileSync(pagePath, pageContent);

        if (!tsxExists) {
          const pageTSXContent = `import Component from './${pageName}.mdx';

const Page = () => {
  return (
    <Component />
  );
};

export default Page;`;
        fs.writeFileSync(pageComponentPath, pageTSXContent);

        console.log(`Page '${pageName}' created successfully in category '${categoryName}'`);
        }
      }
    }
  } catch (error: any) {
    console.error('An error occurred:', error.message);
  }
};

generatePages();
