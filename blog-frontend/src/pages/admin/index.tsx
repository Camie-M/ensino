import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BaseLayout from '@/components/BaseLayout';
import TabelaPost from '@/components/TabelaPosts';

const AdminPage: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (!token || userRole !== 'admin') {
      router.replace('/home');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <BaseLayout banner={false}>
      <TabelaPost />
    </BaseLayout>
  );
};

export default AdminPage;
