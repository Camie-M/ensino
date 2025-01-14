import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import styles from './styled';
import Post from '..';

const PaginatedPosts: React.FC<{ posts: any[] }> = ({ posts }) => {
  const postsPerPage = 3; // Número de posts por página
  const totalPages = Math.ceil(posts.length / postsPerPage); // Calcula o total de páginas
  const [currentPage, setCurrentPage] = useState(1);

  // Calcula os índices dos posts na página atual
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
            {/* Botão Anterior: desativado se estiver na primeira página */}
            <Button
              title="Anterior"
              onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1} // Desabilita o botão se na primeira página
            />
            <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
            {/* Botão Próxima: desativado se estiver na última página */}
            <Button
              title="Próxima"
              onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages} // Desabilita o botão se na última página
            />
          </View>
        </>
      )}
    </View>
  );
};

export default PaginatedPosts;
