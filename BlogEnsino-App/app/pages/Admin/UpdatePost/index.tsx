import React, { useEffect, useState } from 'react';
import { RefreshControl, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FormPost, { FormData } from '@/app/components/FormPost';
import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../types/navigations';
import PostDataProp from '@/app/types/post';
import { getPostById, updatePostbyId } from '@/app/Services/Posts/api';
import GoBackButton from '@/app/components/goBackButton';
import BaseLayout from '@/app/components/BaseLayout';
import * as S from "./styled";

type UpdatePostRouteProp = RouteProp<RootStackParamList, 'UpdatePost'>;

export default function UpdatePost() {
  const route = useRoute<UpdatePostRouteProp>();
  const { postId } = route.params as { postId: string };
  const [postData, setPostData] = useState<PostDataProp>();
  const [refreshing, setRefreshing] = React.useState(false);
  const fetchPosts = async () => {
    try {
      const data = await getPostById(postId);
      if (data) {
        setPostData(data);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [postId]);

  const handleSave = (formData: FormData) => {
    updatePostbyId(postId, formData);
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      fetchPosts()
      setRefreshing(false);
    }, 2000);
  };

  return (
    <BaseLayout >
      <S.Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* <GoBackButton /> */}
        {postData ? (
          <FormPost
            isEditMode={true}
            onSubmit={handleSave}
            title={postData.title}
            author={postData.author}
            text={postData.text}
            image={postData.image}
          />
        ) : (
          <Text>Loading post...</Text>
        )}
      </S.Scroll>
    </BaseLayout>
  );
}
