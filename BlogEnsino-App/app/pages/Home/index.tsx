import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import BaseLayout from '../../components/BaseLayout';
import Search from '../../components/Search';
import PaginatedPosts from '../../components/Posts/PaginatedPosts';
import mockPosts from './mockPosts'; // Importando os dados mockados
import styles from './styled';

const Home: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts); // Inicializa com os dados mockados
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!searchTerm) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, posts]);

  return (
    <BaseLayout>
      <View>
        <View style={styles.headerSection}>
          <Text style={styles.title}>Posts publicados recentemente</Text>
          <Search onSearch={(query) => setSearchTerm(query)} />
        </View>
        <PaginatedPosts posts={filteredPosts} />
      </View>
    </BaseLayout>
  );
};

export default Home;
