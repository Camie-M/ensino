import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import TabelaPost from '@/components/TabelaPosts';

const AdminPage: React.FC = () => {
  return (
    <BaseLayout banner={false}>
      <TabelaPost />
    </BaseLayout>

  );
};

export default AdminPage;