import { AutocompleteHit } from './types';  // Import AutocompleteHit type from types.ts

export const isSymbolQuery = (query: string) => /^[\W_]+$/.test(query);

export const groupHitsByHierarchy = (hits: AutocompleteHit[]) => {
  const groupedHits: { [key: string]: { [key: string]: AutocompleteHit[] } } = {};
  const seenTitles = new Set<string>();

  hits.forEach((hit) => {
    const lvl0 = hit.hierarchy?.lvl0 || 'Documentation';
    const lvl1 = hit.hierarchy?.lvl1 || 'General';

    if (seenTitles.has(hit.title)) return;
    seenTitles.add(hit.title);

    if (!groupedHits[lvl0]) {
      groupedHits[lvl0] = {};
    }
    if (!groupedHits[lvl0][lvl1]) {
      groupedHits[lvl0][lvl1] = [];
    }
    groupedHits[lvl0][lvl1].push(hit);
  });

  return groupedHits;
};
