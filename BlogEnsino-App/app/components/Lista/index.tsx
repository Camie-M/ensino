import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Button from "../Button";
import { Text, FlatList, RefreshControlProps } from "react-native";
import { getAllPosts } from "@/app/Services/Posts/api";
import PostDataProp from "@/app/types/post";

interface ListaProps {
  posts: PostDataProp[];
  refreshControl?: React.ReactElement<RefreshControlProps>;
}

export default function Lista({ posts, refreshControl }: ListaProps) {
  const postsPerPage = 3;
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const renderItem = ({ item }: { item: PostDataProp }) => (
    <S.PostContainer
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      <S.TxtContainer>
        <S.PostContentTitle>{item.title}</S.PostContentTitle>
        <S.PostContent numberOfLines={3}>{item.text}</S.PostContent>
        <S.PostContentAuthor>{item.author}</S.PostContentAuthor>
      </S.TxtContainer>
      <S.BtnContainer>
        <Button
          text={"Editar Post"}
          color={"#4CAF50"}
          route={`UpdatePost, ${item.id}`}
        />
      </S.BtnContainer>
    </S.PostContainer>
  );

  const loadMoreItens = () => {
    // Função para fazer a paginação/loading
  };

  return (
    <S.ListContainer>
      {posts.length === 0 ? (
        <S.EmptyMessage>Nenhum post encontrado.</S.EmptyMessage>
      ) : (
        <>
          <FlatList
            data={currentPosts}
            renderItem={renderItem}
            keyExtractor={(item: PostDataProp, index: number) =>
              item.id ?? index.toString()
            }
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 50,
            }}
            showsVerticalScrollIndicator={true}
            numColumns={1}
            onEndReached={loadMoreItens}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isLoading ? <S.FooterText>Loading...</S.FooterText> : null
            }
            refreshControl={refreshControl}
          />

          <S.PaginationControls>
            <Button
              text="Anterior"
              color="#3b9aff"
              route={currentPage > 1 ? `Page${currentPage - 1}` : ""}
              disabled={currentPage === 1}
            />
            <Text>{`Página ${currentPage} de ${totalPages}`}</Text>
            <Button
              text="Próxima"
              color="#3b9aff"
              route={currentPage < totalPages ? `Page${currentPage + 1}` : ""}
              disabled={currentPage === totalPages || totalPages === 0}
            />
          </S.PaginationControls>
        </>
      )}
    </S.ListContainer>
  );
}
