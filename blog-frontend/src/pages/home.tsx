// pages/index.tsx
import React from 'react';
import styled from 'styled-components';
// import PostRow from '@/components/Posts/PostRow/Posts';
// import PostColumn from '@/components/Posts/PostColumn/Posts';
import Post from '@/components/Posts/Posts';
interface Props {
  toggleTheme(): void;
}

export const Container = styled.div`
  width:100%;
`;
export const Teste = styled.div`
   display:flex;
   flex-direction:row;
   gap:1rem;
   justify-content: center;
   @media only screen and (max-width: 800px) {
        flex-wrap:wrap;
    }
`;
export const Teste2 = styled.div`
   display:flex;
   flex-direction:row;
   gap:1rem;
   justify-content: center;
   @media only screen and (max-width: 800px) {
        flex-wrap:wrap;
    }
`;

const HomePage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Teste>
        <div>
          <Post type="column" />
        </div>
        <div>
          <Post type="row" />
          <Post type="row" />
        </div>
      </Teste>
      <Teste2>
        <Post type="column" />
        <Post type="column" />
        <Post type="column" />
        <Post type="column" />
      </Teste2>
    </Container>
  );
};

export default HomePage;
