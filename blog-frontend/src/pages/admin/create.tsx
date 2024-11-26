import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import PostForm from '@/components/PostForm';

const CreatePostPage: React.FC = () => {
  return (
    <BaseLayout>
      <h1 className='smallTitle'>Criar post</h1>
      <PostForm isEdit={false} />
    </BaseLayout>

  );
};

export default CreatePostPage;