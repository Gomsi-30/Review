// components/Star.js
import React from 'react';

interface StarProps {
  selected?: boolean;
  onSelect: () => void;
}

const Star: React.FC<StarProps> = ({ selected = false, onSelect }) => {
  return (
    <span
      className={`cursor-pointer ${selected ? 'text-yellow-500' : 'text-gray-400'}`}
      onClick={onSelect}
    >
      &#9733;
    </span>
  );
};

export default Star;
