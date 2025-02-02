import React from 'react';

import { createUser } from '@/app/Services/Users/api';

import FormUserData, { UserFormData } from '@/app/components/FormUserData';
import BaseLayout from '@/app/components/BaseLayout';
import GoBackButton from '@/app/components/goBackButton';

import * as S from "./styled"

export default function CreateUser() {
  const handleSave = (formData: UserFormData) => {
    createUser(formData);
  };

  return (
    <BaseLayout>
      <S.Scroll>
        <GoBackButton/>
        <FormUserData isEditMode={false} onSubmit={handleSave} />
      </S.Scroll>
    </BaseLayout>
  );
}
