import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BaseLayout from '@/components/BaseLayout';
import TabelaPost from '@/components/TabelaPosts';
import Link from 'next/link';
import { styled } from 'styled-components';

const ButtonLink = styled.div`
  display: flex;
  justify-content: flex-end;
  & > *{  
    border: 1px solid ${(props) => props.theme.colors.hoverAnchor};
    border-radius:0.2rem;
    background-color:${(props) => props.theme.colors.hoverAnchor};
    text-align:center;
    width:15rem;
    padding:0.5rem;
    margin-bottom:0.5rem;
    color:#fff;
    &:hover{
      background-color:#5d8afd;
    }
  }
`

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
      <ButtonLink>
        <Link href={'./admin/create'}>
          Criar Post
        </Link>
      </ButtonLink>
     
      <TabelaPost />
    </BaseLayout>
  );
};

export default AdminPage;
