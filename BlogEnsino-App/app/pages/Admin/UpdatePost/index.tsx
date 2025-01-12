// screens/EditPost.tsx
import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FormPost, { FormData } from '@/app/components/FormPost';
import { RouteProp } from '@react-navigation/native';
import RootStackParamList from '../../../interfaces/navigations';

type UpdatePostRouteProp = RouteProp<RootStackParamList, 'UpdatePost'>;

export default function UpdatePost() {
  const route = useRoute<UpdatePostRouteProp>();
  const { postId } = route.params;

  const [postData, setPostData] = useState<{ title: string; subtitle: string, text: string }>({
    title: '',
    subtitle: '',
    text: '',
  });

  useEffect(() => {
    fetchPostData(postId);
  }, [postId]);

  const fetchPostData = (id: string) => {
    setPostData({
      title: 'Post Title',
      subtitle: 'Post Subtitle',
      text: 'Post content...',
    });
  };

  const handleSave = (formData: FormData) => {
    console.log('Post updated:', postData);
    console.log('formData:', formData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Edit Post with ID: {postId}</Text>
      <FormPost
        isEditMode={true}
        onSubmit={handleSave}
        title={postData.title}
        subtitle={postData.subtitle}
        text={postData.text}
      />
    </SafeAreaView>
  );
}
