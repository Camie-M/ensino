import React, { useEffect, useState } from 'react';
import { Alert, Pressable, TouchableWithoutFeedback } from 'react-native';
import * as S from './styled';
import DropImage from '../imgDrop';
import { getOwnUserData } from '@/app/Services/Users/api';

interface Form {
  title?: string;
  author?: string;
  text?: string;
  image?: string;
  isEditMode: boolean;
  onSubmit: (formData: FormData) => void;
}

export interface FormData {
  title: string;
  author: string;
  text: string;
  image: string;
}

export default function FormPost({
  title = '',
  author = '',
  text = '',
  image = '',
  isEditMode,
  onSubmit,
}: Form) {
  const [formData, setFormData] = useState<FormData>({
    title,
    author,
    text,
    image,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!isEditMode) {
          const userData = await getOwnUserData(); // Aguarde a promessa ser resolvida
          console.log(userData);
  
          if (userData) {
            setFormData((prevData) => ({
              ...prevData,
              author: userData.username || "", // Evita valores indefinidos
            }));
          }
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };
  
    fetchUserData();
  }, [isEditMode]);
  

  const onChangeForm = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleWarning = (authorName:string) =>{   
    Alert.alert('Error', `Campo ${authorName} não pode ser editado`);
    return;
  }

  const handleSubmit = () => {
    if (!formData.title || !formData.author || !formData.text || !formData.image) {
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
      <Pressable onPress={() => handleWarning("author")}>
        <S.Input
          placeholder="Autor do post"
          value={formData.author}
          editable={false} 
          pointerEvents="none" 
          style={{ backgroundColor: '#E0E0E0' }}
          autoCapitalize="words"
        />
      </Pressable>
       <DropImage
          imgUrl={formData.image}
          onImageChange={(uri: string) => onChangeForm('image', uri)}
        />
      <S.SubmitButton onPress={handleSubmit}>
        <S.SubmitButtonText>
          {isEditMode ? 'Editar Post' : 'Criar post'}
        </S.SubmitButtonText>
      </S.SubmitButton>
    </S.SafeAreaView>
  );
}
