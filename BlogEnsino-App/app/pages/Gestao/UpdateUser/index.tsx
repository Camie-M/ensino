import React, { useEffect, useState } from 'react';

import { RefreshControl, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import RootStackParamList from '../../../types/navigations';
import { UserInfoProp } from '@/app/types/users';
import { getUserById, updateUserbyId } from '@/app/Services/Users/api';

import FormUserData, { UserFormData } from '@/app/components/FormUserData';
import GoBackButton from '@/app/components/goBackButton';
import BaseLayout from '@/app/components/BaseLayout';

import * as S from "./styled";

type UpdateUserRouteProp = RouteProp<RootStackParamList, 'UpdateUser'>;

export default function UpdateUser() {
  const route = useRoute<UpdateUserRouteProp>();
  const { userId } = route.params as { userId: string };
  const [userData, setUserData] = useState<UserInfoProp>();
  const [refreshing, setRefreshing] = React.useState(false);

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

  const handleSave = (formData: UserFormData) => {
    updateUserbyId(userId, formData);
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
        <GoBackButton />
        {userData ? (
          <FormUserData
            isEditMode={true}
            onSubmit={handleSave}
            name={userData.name}
            email={userData.email}
            type={userData.type}
          />
        ) : (
          <Text>Loading post...</Text>
        )}
      </S.Scroll>
    </BaseLayout>
  );
}
