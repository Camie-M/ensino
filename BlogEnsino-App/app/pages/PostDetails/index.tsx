import React, { useEffect, useState } from 'react';
import { Text, ActivityIndicator, RefreshControl } from 'react-native';

import * as S from './styled';

import BaseLayout from '@/app/components/BaseLayout';
import { usePostId } from '@/app/context/PostContext';
import { getPostById } from '@/app/Services/Posts/api';
import PostDataProp from '@/app/types/post';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PostDetails() {
  const { postId } = usePostId();
  const [postData, setPostData] = useState<PostDataProp | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const insets = useSafeAreaInsets();

  const fetchPosts = async () => {
    try {
      if(postId){
        const data = await getPostById(postId);
        setLoading(false)
        setPostData(data);
      } 
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  
  const onRefresh = () => {
    if(postId){
      setRefreshing(true);
      setTimeout(() => {
        getPostById(postId);
        setRefreshing(false);
      }, 1000);
    }
   
  };

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <BaseLayout>
   
    {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : error ? (
        <Text>{error}</Text>
      ) : postData ? (
        <S.Container 
          contentContainerStyle={{ paddingBottom: insets.bottom + 30 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          } 
          >
          <S.ImageContainer>
            <S.PostImage source={{ uri: postData.image }} />
          </S.ImageContainer>

          <S.TextContainer>
          <S.DateText>
            {new Date(postData.createdAt!).toLocaleDateString('pt-BR', {
              timeZone: 'America/Sao_Paulo',
            })}
            <S.Author> - {postData.author}</S.Author>
          </S.DateText>
            <S.Title>{postData.title}</S.Title>
            <S.Description>{postData.text}</S.Description>
          </S.TextContainer>
          </S.Container>
      ) : (
        <Text>Post não encontrado.</Text>
      )}
    </BaseLayout>
  );
}
