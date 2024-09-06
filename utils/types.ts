import { AutocompleteApi, AutocompleteState } from '@algolia/autocomplete-core';
export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface Directory {
  hasChildRoutes: boolean;
  children: Map<string, Directory>;
}

// types.ts
export type AutocompleteHit = {
  objectID: string;
  title: string;
  content?: string;
  description?: string;
  url: string;
  importance?: 'high' | 'medium' | 'low';
  hierarchy?: {
    lvl0?: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
    lvl4?: string;
    lvl5?: string;
  };
};

export type AutocompleteInstance = AutocompleteApi<AutocompleteHit>;

export const initialAutocompleteState: AutocompleteState<AutocompleteHit> = {
  collections: [],
  completion: null,
  context: {},
  isOpen: false,
  query: '',
  activeItemId: null,
  status: 'idle',
};
