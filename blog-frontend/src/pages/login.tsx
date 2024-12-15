"use-client";

import React from 'react';
import LoginForm from '@/components/LoginForm';
import styled from 'styled-components';
import { postList } from '@/utils/postTypes';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  justify-content: center;
  @media (max-width: 580px) {
    flex-direction: column-reverse;
    width: 100vw;
    height: 100vh;
    position: relative;
  }
`;

export const FormContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2; 
  @media (max-width: 580px) {
    background: white;
    position: absolute;
    margin:0 auto;
    width: 90%;
    height:70%;
    border-radius: 0.4rem;
    box-shadow: 0rem 0.4rem 0.4rem rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 50vw;
  height: 100vh;
  background-image: url(${postList[0].image});
  background-size: cover; 
  background-position: center;
  @media (max-width: 580px) {
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 1;
  }
`;

const LoginPage: React.FC = () => {
  return (
    <LoginContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <ImageContainer />
    </LoginContainer>
  );
};

export default LoginPage;
