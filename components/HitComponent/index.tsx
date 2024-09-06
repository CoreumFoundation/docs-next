// HitComponent.tsx
import React from 'react';
import { AutocompleteHit } from '../../utils/types'; 
import HighlightedText from '../HighlightedText';



type HitComponentProps = {
  hit: AutocompleteHit;
  onClick: (url: string) => void;
  query: string;
  isSelected: boolean;
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


export default HitComponent;
