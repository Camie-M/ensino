// screens/EditPost.tsx
import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FormPost, { FormData } from '@/app/components/FormPost';
import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../types/navigations';
import PostDataProp from '@/app/types/post';
import { getPostById, updatePost } from '@/app/Services/Posts/api';
import { FlatList } from 'react-native-gesture-handler';

type UpdatePostRouteProp = RouteProp<RootStackParamList, 'UpdatePost'>;

export default function UpdatePost() {
  const route = useRoute<UpdatePostRouteProp>();
  const { postId } = route.params as { postId: string };


  const [postData, setPostData] = useState<PostDataProp>();

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
  }, []);

  const handleSave = () => {
    if(postData){
      updatePost(postId,postData)
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView contentContainerStyle={{ padding: 16 }}>
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
    </ScrollView>
  </SafeAreaView>
  );
}
