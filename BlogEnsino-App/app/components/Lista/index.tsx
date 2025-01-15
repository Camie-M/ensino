import React, { useEffect, useState } from 'react';
import * as S from "./styled";
import Button from '../Button';
import { FlatList } from 'react-native';
import { getAllPosts } from '@/app/Services/Posts/api';
import { PostDataProp } from '@/app/types/post';

interface ListaProps {
  posts: PostDataProp[]; // Espera um array de posts
}

export default function Lista({ posts }: ListaProps) {
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({ item }: { item: PostDataProp }) => (
    <S.PostContainer
      style={{
        shadowColor: '#000',
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
        <Button text={'Editar Post'} color={'#4CAF50'} route={`UpdatePost, ${item.id}`} />
      </S.BtnContainer>
    </S.PostContainer>
  );

  const loadMoreItens = () => {
    // Função para fazer a paginação/loading
  };

  return (
    <FlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item: PostDataProp) => item.id}
      contentContainerStyle={{
        backgroundColor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 200,
      }}
      showsVerticalScrollIndicator={true}
      numColumns={1}
      onEndReached={loadMoreItens}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoading ? <S.FooterText>Loading...</S.FooterText> : null}
    />
  );
}
