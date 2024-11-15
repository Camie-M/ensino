// pages/index.tsx
import React from 'react';
import styled from 'styled-components';
import Post from '@/components/Posts/Posts';
import HighLights from '@/components/ListLayouts/Highlights';
import { postList } from '@/utils/postTypes';

export const Container = styled.div`
  width:80%;
  margin: 0 auto;
`;

const HomePage: React.FC = () => {
  return (
    <Container>
      <HighLights posts={postList} />
    </Container>

  );
};

export default HomePage;
