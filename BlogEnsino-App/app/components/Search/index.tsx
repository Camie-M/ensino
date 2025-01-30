import React from 'react';
import * as S from './styled';

interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <S.SearchContainer>
      <S.SearchInput
        placeholder="Buscar posts..."
        onChangeText={(text: string) => onSearch(text)}
      />
    </S.SearchContainer>
  );
};

export default Search;
