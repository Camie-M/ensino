// pages/index.tsx
import React, { useState } from 'react';

import HighLights from '@/components/Highlights/';
import BaseLayout from '@/components/BaseLayout';

import { postList } from '@/utils/postTypes';
import styled from 'styled-components';
import Post from '@/components/Posts/Posts';
import PaginationList from '@/components/ListLayouts';


const HomePage: React.FC = () => {
  const [size, setSize] = useState("6");


  return (
    <BaseLayout>
      <HighLights posts={postList} />
      <PaginationList>
        {postList.slice(0, Number(size)).map((post, index) => (
          <Post key={index} {...post} type="column" />
        ))}
      </PaginationList>

    </BaseLayout>

  );
};

export default HomePage;
