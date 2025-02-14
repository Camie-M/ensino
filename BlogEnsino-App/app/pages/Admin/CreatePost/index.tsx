import React, { useLayoutEffect } from 'react';
import { createPost } from '@/app/Services/Posts/api';
import FormPost, { FormData } from '@/app/components/FormPost';
import BaseLayout from '@/app/components/BaseLayout';
import GoBackButton from '@/app/components/goBackButton';
import * as S from "./styled"
import { Alert } from 'react-native';
import RootStackParamList from '@/app/types/navigations';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

export default function CreatePostForm() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleSave = async (formData: FormData) => {
    try {
      const response = await createPost(formData);
      if (response) {
        Alert.alert('Sucesso', 'Post atualizado com sucesso!');
        navigation.goBack()
      } else {
        Alert.alert('Erro', 'Não foi possível editar o Post. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro inesperado.');
      console.error("Erro ao editar Post:", error);
    }
  };

  return (
    <BaseLayout>
      <S.Scroll>
        {/* <GoBackButton/> */}
        <FormPost isEditMode={false} onSubmit={handleSave} />
      </S.Scroll>
    </BaseLayout>
  );
}
