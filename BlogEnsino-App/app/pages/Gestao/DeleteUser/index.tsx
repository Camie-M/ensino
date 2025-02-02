import React from 'react';

import { Text, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import RootStackParamList from '../../../types/navigations';

import { deleteUser } from '@/app/Services/Users/api';

import BaseLayout from '@/app/components/BaseLayout';
import GoBackButton from '@/app/components/goBackButton';

import * as S from "./styled"

type DeleteUserRouteProp = RouteProp<RootStackParamList, 'DeleteUser'>;

export default function DeleteUser() {
const route = useRoute<DeleteUserRouteProp>();
const { userId } = route.params as { userId: string };
    
  const handleDeleteUser = () => {
    deleteUser(userId);
  };

  return (
    <BaseLayout>
      <S.Scroll>
        <GoBackButton/>
        <Text>Tem certeza que deseja deletar o usuário?</Text>
        <TouchableOpacity onPress={handleDeleteUser}>Deletar</TouchableOpacity>
      </S.Scroll>
    </BaseLayout>
  );
}