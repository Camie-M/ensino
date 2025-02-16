import React, { useState, useEffect } from "react";
import { Text, Button, FlatList, RefreshControl } from "react-native";
import * as S from "./styled";
import Post from "..";
import PostDataProp from "@/app/types/post";

interface PaginatedPostsProps {
  posts: PostDataProp[];
  searchTerm: string;
  onRefresh: () => void;
  refreshing: boolean;
}

const PaginatedPosts: React.FC<PaginatedPostsProps> = ({
  posts,
  searchTerm,
  onRefresh,
  refreshing,
}) => {
  const postsPerPage = 3;
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);

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
    setCurrentPage(1);
  }, [searchTerm, posts]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <S.PaginatedPostsContainer>
      {filteredPosts.length === 0 ? (
        <S.EmptyMessage>Nenhum post encontrado para esta pesquisa.</S.EmptyMessage>
      ) : (
        <>
          <FlatList
            data={currentPosts}
            keyExtractor={(item: PostDataProp, index: number) =>
              item.id ?? index.toString()
            }
            contentContainerStyle={{
              justifyContent: "center",
              paddingBottom: 30,
            }}
            renderItem={({ item }: { item: PostDataProp }) => (
              <Post
                id={item.id}
                title={item.title}
                text={item.text}
                author={item.author}
                image={item.image}
                createdAt={item.createdAt}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />

          <S.PaginationControls>
            <Button
              title="Anterior"
              onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
            <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
            <Button
              title="Próxima"
              onPress={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
            />
          </S.PaginationControls>
        </>
      )}
    </S.PaginatedPostsContainer>
  );
};

export default PaginatedPosts;
