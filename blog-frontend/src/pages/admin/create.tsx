import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import PostForm from '@/components/PostForm';
import { useRouter } from 'next/navigation';
import { themeInterface } from '@/styles/themes/themeInterface';

const CreatePostPage: React.FC<themeInterface> = ({toggleTheme}) => {
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
    <BaseLayout banner={false} toggleTheme={toggleTheme}>
      <h1 className='smallTitle'>Criar post</h1>
      <PostForm isEdit={false} />
    </BaseLayout>

  );
};

export default CreatePostPage;