import React, { useState } from 'react';
import HitComponent from '../HitComponent';
import { AutocompleteHit } from '../../utils/types';
import { ChevronDown, ChevronRight } from 'lucide-react';

type SubsectionComponentProps = {
  title: string;
  hits: AutocompleteHit[];
  onSelect: (url: string) => void;
  query: string;
  selectedItemIndex: number;
  startIndex: number;
};

const SubsectionComponent: React.FC<SubsectionComponentProps> = ({
  title,
  hits,
  onSelect,
  query,
  selectedItemIndex,
  startIndex,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const visibleHits = isExpanded ? hits : hits.slice(0, 3);

  const handleCategoryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const matchingHit = hits.find(hit => hit.hierarchy?.lvl1 === title);
    if (matchingHit) {
      onSelect(matchingHit.url.split('#')[0]);
    } else if (hits.length > 0) {
      onSelect(hits[0].url.split('#')[0]);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="ml-4 mb-2 ">
      <h3
        className="text-md font-semibold text-green-500 mb-1 flex items-center cursor-pointer hover:underline"
        onClick={handleCategoryClick}
      >
        {isExpanded ? <ChevronDown size={16} className="mr-1" /> : <ChevronRight size={16} className="mr-1" />}
        <span>{title}</span>
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
      {!isExpanded && hits.length > 3 && (
        <button
          className="text-sm text-green-500 hover:underline mt-1 flex items-center"
          onClick={() => setIsExpanded(true)}
        >
          <ChevronDown size={16} className="mr-1" /> Show more ({hits.length - 3} more)
        </button>
      )}
    </div>
  );
};

export default SubsectionComponent;
