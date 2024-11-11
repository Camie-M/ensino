// pages/index.tsx
import React from 'react';
import styled from 'styled-components';
import Post from '@/components/Posts/Posts';
import ConteinerText from '@/components/Posts/ContainerText';
import ImgContainer from '@/components/Posts/ImgContainer';

export const Container = styled.div`
  width:100%;
`;


const HomePage: React.FC = () => {
  return (
    <Container>
      <Post
        type="row"
        img="./imgs/teste.jpg"
        alt="Descrição da imagem"
        author="Autor Exemplo"
        title="Título do Post"
        text="Este é o texto do post." />
      <Post
        type="column"
        img="./imgs/teste.jpg"
        alt="Descrição da imagem"
        author="Autor Exemplo"
        title="Título do Post"
        text="Este é o texto do post." />
    </Container >
  );
};

export default HomePage;
