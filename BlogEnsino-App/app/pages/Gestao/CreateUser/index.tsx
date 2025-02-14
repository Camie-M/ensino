import React from 'react';

import { createUser } from '@/app/Services/Users/api';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import FormUserData, { UserFormData } from '@/app/components/FormUserData';
import BaseLayout from '@/app/components/BaseLayout';
import GoBackButton from '@/app/components/goBackButton';

import * as S from "./styled"
import { Alert } from 'react-native';
import { navigate } from 'expo-router/build/global-state/routing';
import RootStackParamList from '@/app/types/navigations';

export default function CreateUser() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleSave = async (formData: UserFormData) => {
    try {
      const response = await createUser(formData);
    
      if (response) {
        Alert.alert('Sucesso', 'Usuário criado com sucesso!');
        navigation.goBack()
      } else {
        Alert.alert('Erro', 'Não foi possível criar o usuário. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro inesperado.');
      console.error("Erro ao criar usuário:", error);
    }
  };
  

  return (
    <BaseLayout>
      <S.Scroll>
        <FormUserData isEditMode={false} onSubmit={handleSave} />
      </S.Scroll>
    </BaseLayout>
  );
}
