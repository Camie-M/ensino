import React, { useLayoutEffect } from 'react';
import { Button } from 'react-native';
import { createPost } from '@/app/Services/Posts/api';
import FormPost, { FormData } from '@/app/components/FormPost';
import BaseLayout from '@/app/components/BaseLayout';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import RootStackParamList from '@/app/types/navigations';
import GoBackButton from '@/app/components/goBackButton';

export default function CreatePostForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSave = (formData: FormData) => {
    createPost(formData);
  };

  return (
    <BaseLayout>
     <GoBackButton/>
      <FormPost isEditMode={false} onSubmit={handleSave} />
    </BaseLayout>
  );
}
