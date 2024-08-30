import React, { useState, useMemo, useEffect, useRef, ChangeEvent } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { createAutocomplete, AutocompleteState, AutocompleteOptions } from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import '@algolia/autocomplete-theme-classic';
import { ChevronDown, ChevronUp, ChevronRight, X, Search } from 'lucide-react';


const AlgoliaAppId = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
const AlgoliaApiKey = process.env.NEXT_PUBLIC_ALGOLIA_API_KEY;

if (!AlgoliaAppId || !AlgoliaApiKey) {
  throw new Error('Algolia App ID or API Key is missing');
}


const searchClient = algoliasearch(AlgoliaAppId, AlgoliaApiKey);

type AutocompleteHit = {
  objectID: string;
  title: string;
  content?: string;
  description?: string;
  url: string;
  hierarchy?: {
    lvl0?: string;
    lvl1?: string;
    lvl2?: string;
    lvl3?: string;
    lvl4?: string;
    lvl5?: string;
  };
};

const MAX_VISIBLE_RESULTS = 3;

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!text || !highlight) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) => 
        part.toLowerCase() === highlight.toLowerCase() ? 
          <mark key={index} className="bg-green-700 text-white">{part}</mark> : part
      )}
    </span>
  );
};


const HitComponent: React.FC<{ 
  hit: AutocompleteHit; 
  onClick: (url: string) => void; 
  query: string;
  isSelected: boolean;
}> = ({ hit, onClick, query, isSelected }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick(hit.url);
  };

  return (
    <a 
      href={hit.url} 
      onClick={handleClick} 
      className={`block py-1 px-4 transition-colors duration-150 ${
        isSelected ? 'bg-gray-700 text-white' : 'hover:bg-gray-700 hover:text-white'
      }`}
    >
      <h4 className="text-sm font-medium text-white hover:underline">
        <HighlightedText text={hit.title || ''} highlight={query || ''} />
      </h4>
      {hit.description && (
        <p className="text-xs text-gray-400 mt-1">
          <HighlightedText text={hit.description} highlight={query || ''} />
        </p>
      )}
    </a>
  );
};

const SubsectionComponent: React.FC<{ 
  title: string; 
  hits: AutocompleteHit[]; 
  onSelect: (url: string) => void; 
  query: string;
  selectedItemIndex: number;
  startIndex: number;
}> = ({ title, hits, onSelect, query, selectedItemIndex, startIndex }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleHits = isExpanded ? hits : hits.slice(0, MAX_VISIBLE_RESULTS);

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const matchingHit = hits.find(hit => hit.hierarchy?.lvl1 === title);
    if (matchingHit) {
      onSelect(matchingHit.url.split('#')[0]);
    } else if (hits.length > 0) {
      onSelect(hits[0].url.split('#')[0]);
    }
  };

  return (
    <div className="ml-4 mb-2">
      <h3 className="text-md font-semibold text-green-500 mb-1 flex items-center cursor-pointer" onClick={handleCategoryClick}>
        <ChevronRight size={16} className="inline mr-1" />
        <span className="hover:underline">{title}</span>
      </h3>
      {visibleHits.map((hit, index) => (
        <HitComponent 
          key={hit.objectID} 
          hit={hit} 
          onClick={onSelect} 
          query={query}
          isSelected={selectedItemIndex === startIndex + index}
        />
      ))}
      {hits.length > MAX_VISIBLE_RESULTS && (
        <button
          className="text-green-500 hover:text-green-400 text-sm mt-1 flex items-center ml-4"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <><ChevronUp size={16} className="mr-1" /> Show less</>
          ) : (
            <><ChevronDown size={16} className="mr-1" /> Show more ({hits.length - MAX_VISIBLE_RESULTS} more)</>
          )}
        </button>
      )}
    </div>
  );
};


const SearchResultsSection: React.FC<{ 
  title: string; 
  subsections: { [key: string]: AutocompleteHit[] }; 
  onSelect: (url: string) => void; 
  query: string;
  selectedItemIndex: number;
  startIndex: number;
}> = ({ title, subsections, onSelect, query, selectedItemIndex, startIndex }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMainCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    for (const hits of Object.values(subsections)) {
      const matchingHit = hits.find(hit => hit.hierarchy?.lvl0 === title);
      if (matchingHit) {
        onSelect(matchingHit.url.split('#')[0]);
        return;
      }
    }
    const firstSubsection = Object.values(subsections)[0];
    if (firstSubsection && firstSubsection.length > 0) {
      onSelect(firstSubsection[0].url.split('#')[0]);
    }
  };

  let currentIndex = startIndex;

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold text-green-500 mb-2 flex items-center cursor-pointer" 
          onClick={(e) => {
            handleMainCategoryClick(e);
            setIsExpanded(!isExpanded);
          }}>
        {isExpanded ? <ChevronDown size={20} className="mr-1" /> : <ChevronRight size={20} className="mr-1" />}
        <span className="hover:underline">{title}</span>
      </h2>
      {isExpanded && Object.entries(subsections).map(([subsectionTitle, hits]) => {
        const subSectionComponent = (
          <SubsectionComponent
            key={subsectionTitle}
            title={subsectionTitle}
            hits={hits}
            onSelect={onSelect}
            query={query}
            selectedItemIndex={selectedItemIndex}
            startIndex={currentIndex}
          />
        );
        currentIndex += hits.length;
        return subSectionComponent;
      })}
    </div>
  );
};

const groupHitsByHierarchy = (hits: AutocompleteHit[]) => {
  const groupedHits: { [key: string]: { [key: string]: AutocompleteHit[] } } = {};
  const seenTitles = new Set<string>();

  hits.forEach(hit => {
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
const EnhancedSearchResults: React.FC<{ 
  hits: AutocompleteHit[]; 
  onSelect: (url: string) => void; 
  query: string;
  selectedItemIndex: number;
}> = ({ hits, onSelect, query, selectedItemIndex }) => {
  const groupedHits = groupHitsByHierarchy(hits);
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
      {hits.length === 0 && (
        <p className="text-gray-400 text-center py-4">No results found</p>
      )}
    </div>
  );
};

const SearchBarModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [autocompleteState, setAutocompleteState] = useState<AutocompleteState<AutocompleteHit>>({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  });
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          setAutocompleteState(state);
          setSelectedItemIndex(-1); // Reset selection when state changes
        },
        getSources() {
          return [
            {
              sourceId: 'coreumDocs',
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: 'coreumDocs',
                      query,
                      params: {
                        hitsPerPage: 20,
                        attributesToRetrieve: ['title', 'description', 'url', 'hierarchy'],
                        attributesToSnippet: ['description:50'],
                        snippetEllipsisText: '...',
                        distinct: true,
                      },
                    },
                  ],
                });
              },
            },
          ];
        },
      } as AutocompleteOptions<AutocompleteHit>),
    []
  );

  const { getInputProps, getRootProps, getPanelProps, getListProps } = autocomplete;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSelect = (url: string) => {
    closeModal();
    // Remove extra "iso20022" if present
    const processedUrl = url.replace(/\/iso20022$/, '');
    window.location.href = processedUrl;
  };


  const inputProps = getInputProps({ inputElement: null });
  const panelProps = getPanelProps();
  const rootProps = getRootProps({ inputElement: null });

  

  const allHits = autocompleteState.collections.flatMap(collection => collection.items);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
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
  }, []);

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center space-x-2 bg-gray-800 text-white rounded-md px-3 py-1.5 hover:bg-green-600 transition-colors duration-200 focus:outline-none"
      >
        <Search size={16} />
        <span className="text-sm">Search</span>
        <div className="flex space-x-1">
          <span className="bg-gray-700 text-xs px-1 py-0.5 rounded">⌘</span>
          <span className="bg-gray-700 text-xs px-1 py-0.5 rounded">K</span>
        </div>
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-16">
          <div ref={modalRef} className="bg-gray-900 w-full max-w-2xl rounded-lg shadow-lg flex flex-col" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-2xl font-semibold text-white">Search docs</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors duration-150">
                <X size={24} />
              </button>
            </div>
            <div className="p-4 flex-grow flex flex-col overflow-hidden" {...rootProps}>
              <div className="flex items-center space-x-2 bg-black rounded-full p-1 border border-gray-700 mb-4">
                <div className="flex items-center justify-center w-10 h-10">
                  <Search size={20} className="text-gray-400" />
                </div>
                <div className="relative flex-grow">
               {/* @ts-ignore */}
                <input
                 ref={inputRef}
                 className="w-full pl-2 pr-10 py-2 bg-black text-gray-300 placeholder-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:text-gray-100 sm:text-sm"
                 {...inputProps}
                 placeholder="Search docs"
                 onKeyDown={handleKeyDown}
               />
                  {autocompleteState.query && (
                    <button
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
                      onClick={() => autocomplete.setQuery('')}
                    >
                      <X size={20} className="text-gray-400 hover:text-gray-500" />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex-grow overflow-y-auto">
                {autocompleteState.isOpen && (
                  <EnhancedSearchResults
                    hits={allHits}
                    onSelect={handleSelect}
                    query={autocompleteState.query || ''}
                    selectedItemIndex={selectedItemIndex}
                  />
                )}
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-800 text-sm text-gray-400 flex justify-between items-center">
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