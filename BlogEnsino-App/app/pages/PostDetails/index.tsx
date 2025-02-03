import React, { useEffect, useState } from 'react';
import { Text, Button, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as S from './styled';
import RootStackParamList from '@/app/types/navigations';
import { PostData } from '@/app/pages/Home/mockPosts';
import mockPosts from '@/app/pages/Home/mockPosts';
import BaseLayout from '@/app/components/BaseLayout';

type PostDetailsRouteProp = RouteProp<RootStackParamList, 'PostDetails'>;
type PostDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;

export default function PostDetails() {
  const route = useRoute<PostDetailsRouteProp>();
  const navigation = useNavigation<PostDetailsNavigationProp>();
  const { postId } = route.params;

  const [postData, setPostData] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const post = mockPosts.find((p) => p.id === postId);

    if (post) {
      setPostData(post);
    } else {
      setError('Post não encontrado.');
    }

    setLoading(false);
  }, [postId]);

  return (
    <BaseLayout>
    <S.Container>
    {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : error ? (
        <Text>{error}</Text>
      ) : postData ? (
        <>
          <S.ImageContainer>
            <S.PostImage source={{ uri: postData.image_url }} />
          </S.ImageContainer>

          <S.TextContainer>
            <S.DateText>{new Date(postData.created_at).toLocaleDateString('pt-BR')}</S.DateText>
            <S.Title>{postData.title}</S.Title>
            <S.Description>{postData.text}</S.Description>
          </S.TextContainer>
        </>
      ) : (
        <Text>Post não encontrado.</Text>
      )}
    </S.Container>
     
    </BaseLayout>
  );
}
