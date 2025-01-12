import React from 'react';

import { SafeAreaView } from 'react-native';

import FormPost, { FormData } from '@/app/components/FormPost';

export default function CreatePostForm() {
  const createPost = (formData: FormData) => {
    console.log(formData)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FormPost isEditMode={false} onSubmit={createPost} />
    </SafeAreaView>
  );
}
