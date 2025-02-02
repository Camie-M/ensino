import React, { useState } from 'react';
import { Alert } from 'react-native';

import * as S from './styled';

interface Form {
  email?: string;
  name?: string;
  type?: string;
  isEditMode: boolean;
  onSubmit: (formData: UserFormData) => void;
}

export interface UserFormData {
  email: string;
  name: string;
  type: string;
}

export default function FormUserData({
  email = '',
  name = '',
  type = '',
  isEditMode,
  onSubmit,
}: Form) {
  const [formData, setFormData] = useState<UserFormData>({
    email,
    name,
    type,
  });

  const onChangeForm = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.name || !formData.type) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    onSubmit(formData);
  };

  return (
    <S.SafeAreaView>
      <S.Title>{isEditMode ? 'Editar usuário' : 'Criar usuário'}</S.Title>

      <S.Input
        placeholder="Nome do usuário"
        value={formData.name}
        editable
        onChangeText={(text: string) => onChangeForm('name', text)}
      />
      
      <S.Input
        placeholder="Email do usuário"
        value={formData.email}
        editable
        onChangeText={(text: string) => onChangeForm('email', text)}
      />
      <S.Input
        placeholder="Tipo de usuário"
        value={formData.type}
        editable
        onChangeText={(text: string) => onChangeForm('type', text)}
      />
      <S.SubmitButton onPress={handleSubmit}>
        <S.SubmitButtonText>
          {isEditMode ? 'Editar usuário' : 'Criar usuário'}
        </S.SubmitButtonText>
      </S.SubmitButton>
    </S.SafeAreaView>
  );
}
