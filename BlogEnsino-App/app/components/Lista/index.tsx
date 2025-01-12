import React, { useState } from 'react';
import * as S from "./styled";
import { posts } from "./mock.json"
import { useNavigation } from '@react-navigation/native';
import RootStackParamList from '../../interfaces/navigations';
import { StackNavigationProp } from '@react-navigation/stack';

interface Post {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
}

export default function Lista() {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();

  const navigateToEditPost = (postId: string) => {
    navigation.navigate('UpdatePost', { postId });
  };

  const renderItem = ({ item }: { item: Post }) => (
    <S.PostContainer
      style={{
        // IOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        // Android
        elevation: 5, 
      }}
    >
      <S.TxtContainer>
        <S.PostContentTitle>{item.title}</S.PostContentTitle>
        <S.PostContent numberOfLines={2} ellipsizeMode="tail">{item.text}</S.PostContent>
        <S.PostContentAuthor>{item.author}</S.PostContentAuthor>
      </S.TxtContainer>
      <S.Button onPress={() => navigateToEditPost(item.id)}>
        <S.ButtonText route="Admin" width={'100%'}>Editar Post</S.ButtonText>
      </S.Button>
    </S.PostContainer>
  );
  const loadMoreItens = ()=>{
      // função para fazer a paginação/loading
  }

  return (
    <S.StyledFlatList
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item: Post) => item.id}
      contentContainerStyle={{ 
        backgroundColor: "#f4f4f4",
        justifyContent: "center",
        alignItems: "center",   
        marginTop:"10px",
        gap:"10px"
      }}
      showsVerticalScrollIndicator={true}
      numColumns={1}
      onEndReached={loadMoreItens}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoading ? <S.FooterText>Loading...</S.FooterText>:null}
    />
  );
}
