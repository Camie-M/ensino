import React from 'react';
import { SafeAreaView } from 'react-native';
import FormPost, { FormData } from '@/app/components/FormPost';
import BaseLayout from '@/app/components/BaseLayout';

export default function CreatePostForm() {
  const createPost = (formData: FormData) => {
    console.log(formData)
  }
  return (
    <BaseLayout>
      <FormPost isEditMode={false} onSubmit={createPost} />
    </BaseLayout>

  );
}
