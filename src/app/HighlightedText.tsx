import React from 'react';

interface HighlightedTextProps {
  text: string;
  highlights: string[];
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, highlights }) => {
  const highlightWords = (word: string, index: number) => {
    const isHighlighted = highlights.includes(word.toLowerCase());
    return isHighlighted ? <span style={{ color: 'red' }} key={index}>{word} </span> : word + ' ';
  };

  const words = text.split(/\s+/);

  return (
    <p style={{ marginTop: '6%' }}>
      {words.map((word, index) => highlightWords(word, index))}
    </p>
  );
};

export default HighlightedText;
