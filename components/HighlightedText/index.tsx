import React from 'react';

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!text || !highlight) {
    return <span>{text}</span>;
  }

  // Escape special regex characters and trim the highlight string
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').trim();
  };

  const trimmedHighlight = escapeRegExp(highlight);
  
  // Only create a regex if we have a valid highlight string
  if (!trimmedHighlight) return <span>{text}</span>;

  // Split the text and create highlighted parts, ignoring case
  const parts = text.split(new RegExp(`(${trimmedHighlight})`, 'gi'));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === trimmedHighlight.toLowerCase() ? (
          <mark key={index} className="bg-green-700 text-white">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default HighlightedText;
