import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import PostForm from '@/components/PostForm';

const EditPostPage: React.FC = () => {
  return (
    <BaseLayout banner={false}>
      <h1 className='smallTitle'>Editar Post 1</h1>
      <PostForm isEdit={true} defaultValueText='Post 1' defaultValueTitle='Post 1' />
    </BaseLayout>
  );
};

export default EditPostPage;