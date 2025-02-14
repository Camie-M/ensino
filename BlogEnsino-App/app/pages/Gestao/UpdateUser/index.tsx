import React, { useEffect, useState } from 'react';

import { Alert, RefreshControl, Text } from 'react-native';
import { NavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import RootStackParamList from '../../../types/navigations';
import { UserInfoProp } from '@/app/types/users';
import { getUserById, updateUserbyId } from '@/app/Services/Users/api';

import FormUserData, { UserFormData } from '@/app/components/FormUserData';
import BaseLayout from '@/app/components/BaseLayout';

import * as S from "./styled";

type UpdateUserRouteProp = RouteProp<RootStackParamList, 'UpdateUser'>;

export default function UpdateUser() {
  const route = useRoute<UpdateUserRouteProp>();
  const { userId } = route.params as { userId: string };
  const [userData, setUserData] = useState<UserInfoProp>();
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const fetchUser = async () => {
    try {
      const data = await getUserById(userId);
    
      if (data) {
        setUserData(data);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

 
  const handleSave = async (formData: UserFormData) => {
    try {
      const response = await updateUserbyId(userId, formData);
      if (response) {
        Alert.alert('Sucesso', 'Usuário atualizado com sucesso!');
        navigation.goBack()
      } else {
        Alert.alert('Erro', 'Não foi possível editar o usuário. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro inesperado.');
      console.error("Erro ao editar usuário:", error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      fetchUser()
      setRefreshing(false);
    }, 2000);
  };

  return (
    <BaseLayout>
      <S.Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {userData ? (
          <FormUserData
            isEditMode={true}
            onSubmit={handleSave}
            username={userData.username}
            role={userData.role}
          />
        ) : (
          <Text>Loading post...</Text>
        )}
      </S.Scroll>
    </BaseLayout>
  );
}
