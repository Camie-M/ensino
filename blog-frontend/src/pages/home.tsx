import React, { useEffect, useState } from 'react';
import HighLights from '@/components/Highlights/';
import BaseLayout from '@/components/BaseLayout';
import Post from '@/components/Posts/Posts';
import PaginationList from '@/components/ListLayouts';

interface PostData {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

  const onLoad = async () => {
    try {
      const postResponse = await fetch('http://localhost:3001/posts/', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!postResponse.ok) {
        alert('Posts não encontrados ou credenciais inválidas.');
        return;
      }
      const postsData = await postResponse.json();
      console.log(postsData);
      setPosts(postsData);
    } catch (error) {
      alert('Ocorreu um erro inesperado. Tente novamente.');
      console.log(error);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <BaseLayout>
      <PaginationList>
        {posts.map((post, index) => (
          <Post key={index} {...post} type="column" />
        ))}
      </PaginationList>
    </BaseLayout>
  );
};

export default HomePage;
