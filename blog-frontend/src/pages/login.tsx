import React, { FormEvent } from 'react';
import LoginForm from '@/components/LoginForm';
import styled from 'styled-components'
import { postList } from '@/utils/postTypes';
import ImgContainer from '@/components/Posts/ImgContainer';
import { useRouter } from 'next/router';
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
`
export const FormContainer = styled.div`
    width: 50vw;
    display: flex
;
    justify-content: center;
    align-items: center;
`
export const ImageContainer = styled.div`
  width: 50vw; /* Largura completa da tela */
  height: 100vh; /* Altura completa da tela */
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* A imagem será totalmente visível sem cortes */
`;

const LoginPage: React.FC = () => {

  return (
    <LoginContainer>
      <FormContainer>
        <LoginForm isEdit={false} />
      </FormContainer>
      <ImageContainer>
        <Img src={postList[0].image} />
      </ImageContainer>
    </LoginContainer>
  );
};

export default LoginPage;