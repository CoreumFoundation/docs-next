import React, { useState } from 'react';
import Subsection from '../Subsection';
import { AutocompleteHit } from '../../utils/types';
import { ChevronDown, ChevronRight } from 'lucide-react';

type SearchResultsSectionProps = {
  title: string;
  subsections: { [key: string]: AutocompleteHit[] };
  onSelect: (url: string) => void;
  query: string;
  selectedItemIndex: number;
  startIndex: number;
};

const SearchResultsSection: React.FC<SearchResultsSectionProps> = ({
  title,
  subsections,
  onSelect,
  query,
  selectedItemIndex,
  startIndex,
}) => {
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
    setIsExpanded(!isExpanded);
  };

  let currentIndex = startIndex;

  return (
    <div className="mb-4">
      <h2
        className="text-lg font-bold text-green-500 mb-2 flex items-center cursor-pointer hover:underline"
        onClick={handleMainCategoryClick}
      >
        {isExpanded ? <ChevronDown size={20} className="mr-1" /> : <ChevronRight size={20} className="mr-1" />}
        <span>{title}</span>
      </h2>
      {isExpanded && Object.entries(subsections).map(([subsectionTitle, hits]) => {
        const subSectionComponent = (
          <Subsection
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
export default SearchResultsSection;