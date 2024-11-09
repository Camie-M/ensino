// pages/index.tsx
import React from 'react';
import styled from 'styled-components';
import Posts from '@/components/Posts/Posts';

interface Props {
  toggleTheme(): void;
}

export const Container = styled.div`
    width: 80%;
`;

const HomePage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Posts />
      <Posts />
      {/* <h1>The blog</h1>
      <h2>The blog</h2>
      <h3>The blog</h3>
      <p>The blog</p>
      <Button onClick={toggleTheme}>Toggle Theme</Button> */}
    </Container>
  );
};

export default HomePage;
