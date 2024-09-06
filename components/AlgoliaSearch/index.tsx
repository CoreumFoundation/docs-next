import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import debounce from 'lodash/debounce';
import algoliasearch from 'algoliasearch/lite';
import { createAutocomplete } from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import { AutocompleteInstance, AutocompleteHit, initialAutocompleteState } from '../../utils/types'; 
import SearchResultsSection from '../SearchResultsSection';
import { isSymbolQuery, groupHitsByHierarchy } from '../../utils/utils'; 
import { X, Search, Loader } from 'lucide-react';

const AlgoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const AlgoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;

if (!AlgoliaAppId || !AlgoliaApiKey) {
  throw new Error('Algolia App ID or API Key is missing');
}

const searchClient = algoliasearch(AlgoliaAppId, AlgoliaApiKey);

const SearchBarModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autocompleteState, setAutocompleteState] = useState(initialAutocompleteState);
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<AutocompleteInstance | null>(null);

  const debouncedSearch = useCallback(
    debounce((query: string) => {
      if (autocompleteRef.current) {
        autocompleteRef.current.setQuery(query);
        autocompleteRef.current.refresh();
      }
      setIsLoading(false);
    }, 150),
    []
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    setIsLoading(true);
    setSelectedItemIndex(-1); // Reset selection when the input changes
    debouncedSearch(newQuery);
  };

  const openModal = useCallback(() => {
    autocompleteRef.current = createAutocomplete<AutocompleteHit>({
      onStateChange({ state }) {
        setAutocompleteState(state);
        setSelectedItemIndex(-1);

        if (isSymbolQuery(state.query) || state.query.trim() === '') {
          setNoResultsFound(true);
        } else {
          const hasResults = state.collections.some(collection => collection.items.length > 0);
          setNoResultsFound(!hasResults && state.query.trim() !== '');
        }
      },
      getSources({ query }) {
        return [
          {
            sourceId: 'coreumDocs',
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: 'coreumDocs',
                    query,
                    params: {
                      hitsPerPage: 20,
                      attributesToRetrieve: ['title', 'description', 'url', 'hierarchy', 'importance'],
                      attributesToSnippet: ['description:50'],
                      snippetEllipsisText: '...',
                      distinct: true,
                      optionalFilters: ['importance:high<score=3>', 'importance:medium<score=2>'],
                      facets: ['importance'],
                      maxValuesPerFacet: 3,
                    },
                  },
                ],
              });
            },
          },
        ];
      },
    });

    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setAutocompleteState(initialAutocompleteState);
    setSelectedItemIndex(-1);
    setQuery('');
    setIsLoading(false);
    setNoResultsFound(false);
    autocompleteRef.current = null;
  };

  const handleSelect = (url: string) => {
    closeModal();
    const processedUrl = url.replace(/\/iso20022$/, '');
    window.location.href = processedUrl;
  };

  const allHits = useMemo(() => 
    autocompleteState.collections.flatMap(collection => collection.items),
    [autocompleteState.collections]
  );

  const groupedHits = useMemo(() => 
    groupHitsByHierarchy(allHits),
    [allHits]
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log('Key pressed:', event.key); // Debugging
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedItemIndex(prevIndex =>
          prevIndex < allHits.length - 1 ? prevIndex + 1 : prevIndex
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedItemIndex(prevIndex =>
          prevIndex > 0 ? prevIndex - 1 : -1
        );
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedItemIndex >= 0 && selectedItemIndex < allHits.length) {
          handleSelect(allHits[selectedItemIndex].url);
        }
        break;
      case 'Escape':
        closeModal();
        break;
    }
  };

  useEffect(() => {
    const handleGlobalKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        openModal();
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [openModal]);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  const EnhancedSearchResults: React.FC<{ 
    hits: AutocompleteHit[]; 
    onSelect: (url: string) => void; 
    query: string;
    selectedItemIndex: number;
  }> = ({ hits, onSelect, query, selectedItemIndex }) => {
    if (!query) {
      return null;
    }
    
    if (!hits || hits.length === 0 || noResultsFound) {
      return (
        <div className="text-center py-4">
          <p className="text-gray-400">No results found for &quot;{query}&quot;</p>
        </div>
      );
    }
  
    let startIndex = 0;
  
    return (
      <div className="space-y-4">
        {Object.entries(groupedHits).map(([category, subsections]) => {
          const searchResultsSection = (
            <SearchResultsSection
              key={category}
              title={category}
              subsections={subsections}
              onSelect={onSelect}
              query={query}
              selectedItemIndex={selectedItemIndex}
              startIndex={startIndex}
            />
          );
          startIndex += Object.values(subsections).flat().length;
          return searchResultsSection;
        })}
      </div>
    );
  };

  return (
    <>
      {/* Mobile search button */}
      <button
        onClick={openModal}
        className="md:hidden flex items-center justify-center w-10 h-10 text-white"
        aria-label="Search"
      >
        <Search size={20} />
      </button>

      {/* Desktop search button */}
      <button
        onClick={openModal}
        className="hidden md:flex items-center space-x-2 bg-gray-800 text-white rounded-md px-3 py-1.5 hover:bg-green-600 transition-colors duration-200 focus:outline-none"
      >
        <Search size={16} />
        <span className="text-sm">Search</span>
        <div className="flex space-x-1">
          <span className="bg-gray-700 text-xs px-1 py-0.5 rounded">⌘</span>
          <span className="bg-gray-700 text-xs px-1 py-0.5 rounded">K</span>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="bg-[#1B1D23] w-full max-w-xl rounded-lg shadow-lg flex flex-col" style={{ maxHeight: 'calc(100vh - 6rem)' }}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-2xl font-semibold text-white">Search docs</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors duration-150">
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-2 bg-black rounded-full p-1 border border-gray-700">
                <div className="flex items-center justify-center w-10 h-10">
                  {isLoading ? (
                    <Loader size={20} className="text-gray-400 animate-spin" />
                  ) : (
                    <Search size={20} className="text-gray-400" />
                  )}
                </div>
                <div className="relative flex-grow">
                  <input
                    ref={inputRef}
                    className="w-full pl-2 pr-10 py-2 bg-black text-gray-300 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:text-gray-100 sm:text-sm"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search docs"
                    onKeyDown={handleKeyDown}
                  />
                  {query && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => {
                        setQuery('');
                        if (autocompleteRef.current) {
                          autocompleteRef.current.setQuery('');
                          autocompleteRef.current.refresh();
                        }
                      }}
                    >
                      <X size={20} className="text-gray-400 hover:text-gray-500" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="flex-grow overflow-y-auto px-4">
              {!isLoading && query && (
                <EnhancedSearchResults
                  hits={allHits}
                  onSelect={handleSelect}
                  query={query}
                  selectedItemIndex={selectedItemIndex}
                />
              )}
            </div>

            <div className="px-4 py-3 bg-[#1B1D23] text-sm text-gray-400 flex justify-between items-center border-t border-gray-700">
              <div>
                Press
                <span className="bg-gray-700 text-xs px-2 py-1 rounded mx-1">↓</span>
                <span className="bg-gray-700 text-xs px-2 py-1 rounded mr-1">↑</span>
                to navigate,
                <span className="bg-gray-700 text-xs px-2 py-1 rounded mx-1">enter</span>
                to select,
                <span className="bg-gray-700 text-xs px-2 py-1 rounded mx-1">esc</span>
                to close
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBarModal;