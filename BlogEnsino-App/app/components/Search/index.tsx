import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styled';

const Search: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar posts..."
        onChangeText={(text) => onSearch(text)}
      />
    </View>
  );
};

export default Search;
