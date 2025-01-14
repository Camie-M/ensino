import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from './styled';
import Post from '..';

const PaginatedPosts: React.FC<{ posts: any[] }> = ({ posts }) => {
  const postsPerPage = 3;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <View style={styles.paginatedPostsContainer}>
      {posts.length === 0 ? (
        <Text style={styles.emptyMessage}>Nenhum post encontrado para esta pesquisa.</Text>
      ) : (
        <>
          <FlatList
            data={currentPosts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <Post {...item} />}
            style={styles.postsGrid}
          />
          <View style={styles.paginationControls}>
            <Button
              title="Anterior"
              onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            />
            <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
            <Button
              title="Próxima"
              onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default PaginatedPosts;
