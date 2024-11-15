// pages/index.tsx
import React, { useState } from 'react';

// import HighLights from '@/components/ListLayouts/Highlights';
import BaseLayout from '@/components/BaseLayout';

import { postList } from '@/utils/postTypes';
import styled from 'styled-components';
import Post from '@/components/Posts/Posts';
import PaginationList from '@/components/ListLayouts';

export const Title = styled.h1`
  margin:2rem 0;
`;

const HomePage: React.FC = () => {
  const [size, /* setSize */] = useState("6");
  const [pagination, /* setPagination */] = useState(false);

  return (
    <BaseLayout>
      <Title>Recent blog posts</Title>
      {/* <HighLights posts={postList} /> */}
      <Title>All blog posts</Title>
      <PaginationList size={size} pagination={pagination}>
        {postList.slice(0, Number(size)).map((post, index) => (
          <Post key={index} {...post} type="column" />
        ))}
      </PaginationList>

    </BaseLayout>

  );
};

export default HomePage;
