import React from 'react';
import * as S from './styled';
import { useDebouncedCallback } from 'use-debounce';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleSearch = useDebouncedCallback((term: string) => {
    onSearch(term);
  }, 300);

  return (
    <S.SearchContainer>
      <input
        type="text"
        placeholder="Buscar posts..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </S.SearchContainer>
  );
};

export default Search;
