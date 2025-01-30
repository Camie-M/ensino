import React, { useLayoutEffect } from 'react';
import { createPost } from '@/app/Services/Posts/api';
import FormPost, { FormData } from '@/app/components/FormPost';
import BaseLayout from '@/app/components/BaseLayout';
import GoBackButton from '@/app/components/goBackButton';
import * as S from "./styled"

export default function CreatePostForm() {

  const handleSave = (formData: FormData) => {
    createPost(formData);
  };

  return (
    <BaseLayout>
      <S.Scroll>
        <GoBackButton/>
        <FormPost isEditMode={false} onSubmit={handleSave} />
      </S.Scroll>
    </BaseLayout>
  );
}
