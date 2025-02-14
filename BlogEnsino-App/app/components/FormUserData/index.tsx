import React, { useState } from 'react';
import { Alert } from 'react-native';

import * as S from './styled';

interface Form {
  username?: string;
  password?:string;
  role?: string;
  isEditMode: boolean;
  onSubmit: (formData: UserFormData) => void;
}

export interface UserFormData {
  username: string;
  password:string;
  role: string;
}

export default function FormUserData({
  password='',
  username = '',
  role = '',
  isEditMode,
  onSubmit,
}: Form) {
  const [formData, setFormData] = useState<UserFormData>({
    password,
    username,
    role,
  });

  const onChangeForm = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if ( !formData.username || !formData.role) {
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
        value={formData.username}
        editable
        onChangeText={(text: string) => onChangeForm('username', text)}
      />
      {isEditMode ? "" :  
      <S.Input
        placeholder="Senha"
        value={formData.password}
        editable
        onChangeText={(text: string) => onChangeForm('password', text)}
      />}
      <S.Input
        placeholder="Tipo de usuário"
        value={formData.role}
        editable
        onChangeText={(text: string) => onChangeForm('role', text)}
      />
      <S.SubmitButton onPress={handleSubmit}>
        <S.SubmitButtonText>
          {isEditMode ? 'Editar usuário' : 'Criar usuário'}
        </S.SubmitButtonText>
      </S.SubmitButton>
    </S.SafeAreaView>
  );
}
