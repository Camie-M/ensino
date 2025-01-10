import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import * as S from "./styled"
import { RootStackParamList } from './interface';
import Lista from '@/app/components/Lista';

export default function Admin() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <S.btnContainer>
          <S.StyledButton onPress={() => navigation.navigate('Gestao')}>
            <S.ButtonText>Criar Post</S.ButtonText>
          </S.StyledButton>
        </S.btnContainer>
        <S.ListContainer>
          <S.Title>Lista de Posts</S.Title>
          <Lista/>
        </S.ListContainer>
       
      </S.Container>
    </SafeAreaView>
  );
}
