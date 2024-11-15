// pages/index.tsx
import React from 'react';

import HighLights from '@/components/ListLayouts/Highlights';
import BaseLayout from '@/components/BaseLayout';

import { postList } from '@/utils/postTypes';

const HomePage: React.FC = () => {
  return (
    <BaseLayout>
      <HighLights posts={postList} />
    </BaseLayout>

  );
};

export default HomePage;
