import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import * as S from './styled';
import RootStackParamList from '@/app/types/navigations';
import PostDataProp from '@/app/types/post';
import { usePostId } from '@/app/context/PostContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


type PostNavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;

const Post: React.FC<PostDataProp> = ({ id, title, text, image, createdAt}) => {
  const navigation = useNavigation<PostNavigationProp>();
  const { setPostId } = usePostId();
  const handleNavigation = async () => {   
    if (!id) return;
    const token =  await AsyncStorage.getItem('userToken');
    if (!token) {
      navigation.navigate('Conta');
      return;
    }
    setPostId(id);
    navigation.navigate('PostDetails', { postId: id });
  };
  

  return (
    <S.ContainerAnchor onPress={handleNavigation}>
      <S.ImageContainer>
        <S.PostImage source={{ uri: image }} />
      </S.ImageContainer>

      <S.TextContainer>
      <S.DateText>
        {new Date(createdAt!).toLocaleDateString('pt-BR', {
          timeZone: 'America/Sao_Paulo',
        })}
      </S.DateText>

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
