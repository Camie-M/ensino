import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styled';
import RootStackParamList from '@/app/types/navigations';
import PostDataProp from '@/app/types/post';
import { usePostId } from '@/app/context/PostContext';

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

type PostNavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;

const Post: React.FC<PostDataProp> = ({ id, title, text, image}) => {
  const navigation = useNavigation<PostNavigationProp>();
  const { setPostId } = usePostId();
  const handleNavigation = () => {   
    if (!id) {
      return;
    }    
    setPostId(id)
    navigation.navigate('PostDetails', { postId: id });
  };

  return (
    <S.ContainerAnchor onPress={handleNavigation}>
      <S.ImageContainer>
        <S.PostImage source={{ uri: image }} />
      </S.ImageContainer>

      <S.TextContainer>
        <S.DateText>{}</S.DateText>

        <S.TitleContainer>
          <S.Title>{title}</S.Title>
          <Ionicons name="arrow-forward" size={16} color="#007AFF" />
        </S.TitleContainer>

        <S.Description numberOfLines={3}>{text}</S.Description>
      </S.TextContainer>
    </S.ContainerAnchor>
  );
};

export default Post;
