import React, { useEffect, useState } from 'react';
import { RefreshControl, FlatList, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import BaseLayout from '@/app/components/BaseLayout';
import Button from '@/app/components/Button';

import { getAllUsers } from '@/app/Services/Users/api';
import { UserInfoProp } from '@/app/types/users';

import * as S from "./styled";

const mockedUsers = [
  {
    id: 1,
    name: 'Camila',
    type: 'admin',
    email: 'camila@gmail.com'
  },
  {
    id: 2,
    name: 'Breno',
    type: 'teacher',
    email: 'breno@gmail.com'
  },
  {
    id: 3,
    name: 'Valdir',
    type: 'user',
    email: 'valdir@gmail.com'
  },
  {
    id: 4,
    name: 'Matheus',
    type: 'user',
    email: 'matheus@gmail.com'
  },
];

export default function Gestao({ route }: any) {
  const [users, setUsers] = useState<UserInfoProp[]>(mockedUsers);
  const [filteredUsers, setFilteredUsers] = useState<UserInfoProp[]>(mockedUsers);
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedType, setSelectedType] = useState<string>('all'); // New state for filter

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();      
      if (data) {
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      fetchUsers();
      setRefreshing(false);
    }, 2000);
  };

  const handleFilterChange = (type: string) => {
    setSelectedType(type);

    if (type === 'all') {
      setFilteredUsers(users);
    } else {
      const filtered = users.filter(user => user.type === type);
      setFilteredUsers(filtered);
    }
  };

  const renderItem = ({ item }: { item: UserInfoProp }) => (
    <S.UserContainer
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 5,
      }}
    >
      <S.TxtContainer>
        <S.NameContainer>
          <S.NameText>{item.name}</S.NameText>
          <S.EmailText>({item.email})</S.EmailText>
        </S.NameContainer>
        <Text>Tipo: {item.type}</Text>
      </S.TxtContainer>
      <S.BtnContainer>
        <Button text={'Editar'} color={'#4CAF50'} route={`UpdateUser, ${item.id}`} width='25%' />
        <Button text={'Deletar'} color={'#bd0f0f'} route={`DeleteUser, ${item.id}`} width='25%' />
      </S.BtnContainer>
    </S.UserContainer>
  );

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <BaseLayout>
      <S.Container>
        <Button
          text={"Criar novo user"}
          color={"#3b9aff"}
          route={"CreateUser"} 
          width={'80%'} 
        />
      </S.Container>
      <S.Title>Gestão de Usuários</S.Title>

      <Picker
        selectedValue={selectedType}
        onValueChange={handleFilterChange}
        style={{ width: '100%', marginBottom: 20 }}
      >
        <Picker.Item label="Todos" value="all" />
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="Professor" value="teacher" />
        <Picker.Item label="Usuário" value="user" />
      </Picker>

      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item: UserInfoProp, index: number) => item.email ?? index.toString()}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 200,
        }}
        showsVerticalScrollIndicator={true}
        numColumns={1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </BaseLayout>
  );
}
