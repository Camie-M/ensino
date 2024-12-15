import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import { themeInterface } from '@/styles/themes/themeInterface';
const SearchPage: React.FC<themeInterface> = ({toggleTheme}) => {
  return (
    <BaseLayout banner={false} toggleTheme={toggleTheme}>
      <p>Create posta page</p>
    </BaseLayout>
  );
};

export default SearchPage;