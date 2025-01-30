import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import * as S from './styled';
import { Ionicons } from '@expo/vector-icons';
import BaseLayout from '../BaseLayout';

interface FormUserData {
  email?: string;
  senha?: string;
}

export interface UserFormData extends FormUserData {
  onSubmit?: (formData: FormUserData) => void;
}

export default function FormUser({ email, senha, onSubmit }: UserFormData) {
  const [formData, setFormData] = useState<FormUserData>({ email, senha });
  const [showPassword, setShowPassword] = useState(false);

  const onChangeForm = (field: keyof FormUserData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.senha) {
      Alert.alert('Error', 'Por favor, preencha todos os campos');
      return;
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <BaseLayout>
        <S.PageContainer>
            <S.Title>Login</S.Title>
            <S.Container>
                <S.Input
                    placeholder="E-mail"
                    value={formData.email}
                    editable
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text: string) => onChangeForm('email', text)}
                />
            </S.Container>

            <S.Container>
                <S.Input
                    placeholder="Senha"
                    value={formData.senha}
                    editable
                    secureTextEntry={!showPassword}
                    onChangeText={(text: string) => onChangeForm('senha', text)}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? 
                <Ionicons name={"eye-off-outline"} size={24} color={"#000"} /> : 
                <Ionicons name={"eye-outline"} size={24} color={"#000"} />
                }
            </TouchableOpacity>
            </S.Container>

            <S.SubmitButton onPress={handleSubmit}>
              <S.SubmitButtonText>Login</S.SubmitButtonText>
            </S.SubmitButton>
        </S.PageContainer>
    </BaseLayout>
  );
}
