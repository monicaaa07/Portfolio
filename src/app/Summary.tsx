// components/Summary.tsx
import React from 'react';
import HighlightedText from './HighlightedText';

interface SummaryProps {
  text: string;
}

const Summary: React.FC<SummaryProps> = ({ text }) => {
  const highlights = ['data', 'visualization', 'full', 'stack', 'development', 'natural', 'language', 'processing', 'ai', 'business', 'intelligence', 'datawarehousing' , 'systems', 'administration','big','ml']; // Add more words to highlight as needed
  return <HighlightedText text={text} highlights={highlights} />;
};

export default Summary;
