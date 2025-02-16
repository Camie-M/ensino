import React, { useEffect, useState } from "react";
import * as S from "./styled";
import ButtonCreate from "../Button";
import { Text, Button, FlatList, RefreshControlProps, Alert } from "react-native";
import { deletePost, getAllPosts } from "@/app/Services/Posts/api";
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

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;

    Alert.alert("Confirmar Exclusão", "Tem certeza de que deseja deletar este post?", [
        { text: "Cancelar", style: "cancel" },
        {
            text: "Deletar",
            onPress: async () => {
                const success = await deletePost(id);
                if (success) {
                    Alert.alert("Sucesso", "Post deletado com sucesso!");
                } else {
                    Alert.alert("Erro", "Não foi possível deletar o post. Tente novamente.");
                }
            },
        },
    ]);
};


  const renderItem = ({ item }: { item: PostDataProp }) => (
    <S.PostContainer
      style={{
        elevation: 5, // Apenas para Android
        shadowColor: "#000", // Funciona no iOS
        shadowOffset: { width: 0, height: 2 }, // iOS
        shadowOpacity: 0.2, // iOS (valor reduzido para suavizar)
        shadowRadius: 5, // iOS
      }}
    >
      <S.TxtContainer>
        <S.PostContentTitle>{item.title}</S.PostContentTitle>
        <S.PostContent numberOfLines={3}>{item.text}</S.PostContent>
        <S.PostContentAuthor>{item.author}</S.PostContentAuthor>
      </S.TxtContainer>
      <S.BtnContainer>
        <ButtonCreate
          text={"Editar Post"}
          color={"#4CAF50"}
          route={`UpdatePost, ${item.id}`}
          width="45%"
        />
         <S.ButtonDelete color="#FF3B30" onPress={() => handleDelete(item.id)}>
            <S.ButtonText>Deletar</S.ButtonText>
          </S.ButtonDelete>
      </S.BtnContainer>
    </S.PostContainer>
  );


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
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isLoading ? <S.FooterText>Loading...</S.FooterText> : null
            }
            refreshControl={refreshControl}
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
    </S.ListContainer>
  );
}
