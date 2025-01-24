import React from 'react';
import { createPost } from '@/app/Services/Posts/api';
import FormPost, { FormData } from '@/app/components/FormPost';
import BaseLayout from '@/app/components/BaseLayout';

export default function CreatePostForm() {
  const handleSave = (formData: FormData) => {
    createPost(formData);        
  };
  return (
    <BaseLayout>
      <FormPost isEditMode={false} onSubmit={handleSave} />
    </BaseLayout>

  );
}
