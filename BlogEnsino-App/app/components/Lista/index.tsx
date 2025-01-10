import React, { useState } from 'react';
import * as S from "./styled";
import {posts} from "./mock.json"
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@/app/pages/Admin/interface';
interface Post {
  id:string;
  title: string;
  text: string;
  author: string;
  image: string;
}

export default function Lista() {
  const [isLoading, setIsLoading] = useState(false)
   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const renderItem = ({ item }: { item: Post }) => (
    <S.PostContainer>
      <S.TxtContainer>
        <S.PostContent>{item.title}</S.PostContent>
        <S.PostContent numberOfLines={2} ellipsizeMode="tail">{item.text}</S.PostContent>
        <S.PostContent>{item.author}</S.PostContent>
      </S.TxtContainer>
      <S.BtnContainer>
          <S.Button onPress={() => navigation.navigate('Gestao')} color="#4CAF50">
            <S.ButtonText>Editar Post</S.ButtonText>
          </S.Button>
          <S.Button onPress={() => navigation.navigate('Gestao')} color="#FF6347">
            <S.ButtonText>Excluir Post</S.ButtonText>
          </S.Button>
      </S.BtnContainer>
     
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
        marginTop:10,
        gap:10
      }}
      showsVerticalScrollIndicator={true}
      numColumns={1}
      onEndReached={loadMoreItens}
      onEndReachedThreshold={0.5}
      ListFooterComponent={isLoading ? <S.FooterText>Loading...</S.FooterText>:null}
    />
  );
}
