import React, { useEffect, useState } from 'react';
import { RefreshControl, FlatList, Text, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import BaseLayout from '@/app/components/BaseLayout';
import Button from '@/app/components/Button';

import { deleteUser, getAllUsers } from '@/app/Services/Users/api';
import { UserInfoProp } from '@/app/types/users';

import * as S from "./styled";
import RootStackParamList from '@/app/types/navigations';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from 'expo-router';
type PostNavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;

export default function Gestao() {
  const [users, setUsers] = useState<UserInfoProp[]>();
  const [filteredUsers, setFilteredUsers] = useState<UserInfoProp[]>();
   const navigation = useNavigation<PostNavigationProp>();
  const [refreshing, setRefreshing] = React.useState(false);
  const [selectedType, setSelectedType] = useState<string>('all'); 

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      if (data) {
        setUsers(data); 
        setFilteredUsers(data); 
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      fetchUsers();
      setSelectedType("all")
      setRefreshing(false);
    }, 1000);
  };  

  const handleDelete = async (id:string | undefined) => {
    if(!id)return
    Alert.alert("Confirmar Logout", "Tem certeza de que deseja sair?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Deletar",
        onPress: async () => {
          deleteUser(id);
        },
      },
    ]);
  }
  
  const handleEdit = async (id:string | undefined) => {
    if(!id)return
    navigation.navigate('UpdateUser', {userId:id});
  }
  
  const handleFilterChange = (type: string) => {
    setSelectedType(type);

    if (type === 'all') {
      setFilteredUsers(users);
    } else {
      const filtered = users?.filter(user => user.role === type);
      console.log(filtered);
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
          <S.NameText>{item.username}</S.NameText>
        </S.NameContainer>
        <Text>Tipo: {item.role}</Text>
      </S.TxtContainer>
      <S.BtnContainer>
        <S.ButtonContainer color="#4CAF50" onPress={() => handleEdit(item.id)}>
          <S.ButtonText>Editar</S.ButtonText>
        </S.ButtonContainer>

        <S.ButtonContainer color="#FF3B30" onPress={() => handleDelete(item.id)}>
          <S.ButtonText>Deletar</S.ButtonText>
        </S.ButtonContainer>
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
        <Picker.Item label="Professor" value="professor" />
        <Picker.Item label="Aluno" value="aluno" />
      </Picker>

      <FlatList
        data={filteredUsers}
        renderItem={renderItem}
        keyExtractor={(item: UserInfoProp, index: number) => item.id ?? index.toString()}
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
