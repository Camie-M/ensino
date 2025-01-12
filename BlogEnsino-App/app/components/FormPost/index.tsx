import React, { useState } from 'react';
import { Alert, Text } from 'react-native';
import * as S from './styled';

interface Form {
  title?: string;
  subtitle?: string;
  text?: string;
  isEditMode: boolean;
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  title: string;
  subtitle: string;
  text: string;
}

export default function FormPost({
  title = '',
  subtitle = '',
  text = '',
  isEditMode,
  onSubmit,
}: Form) {
  const [formData, setFormData] = useState<FormData>({
    title,
    subtitle,
    text,
  });

  const onChangeForm = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.title || !formData.subtitle || !formData.text) {
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
      <S.Input
        placeholder="Subtítulo do post"
        value={formData.subtitle}
        editable
        onChangeText={(text: string) => onChangeForm('subtitle', text)}
      />
      <S.LargeInput
        placeholder="Texto do post"
        value={formData.text}
        editable
        multiline
        numberOfLines={200}
        onChangeText={(text: string) => onChangeForm('text', text)}
      />
      
      <S.SubmitButton onPress={handleSubmit}>
        <S.SubmitButtonText>
          {isEditMode ? 'Editar Post' : 'Criar post'}
        </S.SubmitButtonText>
      </S.SubmitButton>
    </S.SafeAreaView>
  );
}

