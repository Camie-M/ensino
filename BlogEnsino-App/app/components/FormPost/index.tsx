import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import * as S from './styled';

interface Form {
  title?: string;
  author?: string;
  text?: string;
  isEditMode: boolean;
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  title: string;
  author: string;
  text: string;
}

export default function FormPost({
  title = '',
  author = '',
  text = '',
  isEditMode,
  onSubmit,
}: Form) {
  const [formData, setFormData] = useState<FormData>({
    title,
    author,
    text,
  });

  const onChangeForm = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.author || !formData.text) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    onSubmit(formData);
  };

  return (
    <S.SafeAreaView>
      <S.Title>{isEditMode ? 'Editar Post' : 'Criar post'}</S.Title>
      <S.Input
        placeholder="Título do post"
        value={formData.title}
        editable
        onChangeText={(text: string) => onChangeForm('title', text)}
      />
      
      <S.LargeInput
        placeholder="Texto do post"
        value={formData.text}
        editable
        multiline
        numberOfLines={200}
        onChangeText={(text: string) => onChangeForm('text', text)}
      />
      <S.Input
        placeholder="autor do post"
        value={formData.author}
        editable
        onChangeText={(text: string) => onChangeForm('author', text)}
      />
      <S.SubmitButton onPress={handleSubmit}>
        <S.SubmitButtonText>
          {isEditMode ? 'Editar Post' : 'Criar post'}
        </S.SubmitButtonText>
      </S.SubmitButton>
    </S.SafeAreaView>
  );
}

