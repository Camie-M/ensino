import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';

import { SafeAreaView, Text } from 'react-native';
import * as S from "./styled"

import Lista from '@/app/components/Lista';
import Button from '@/app/components/Button';

export default function Admin() {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Container>
        <Button
          text={"Criar novo Post"}
          color={"#3b9aff"}
          route={"CreatePost"} 
          width={'80%'}        />
        <S.ListContainer>
          <S.Title>Gestão de Posts</S.Title>
          <Lista/>
        </S.ListContainer>
       
      </S.Container>
    </SafeAreaView>
  );
}
