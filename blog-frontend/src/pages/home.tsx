// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { Suspense } from 'react'
import HighLights from '@/components/Highlights/';
import BaseLayout from '@/components/BaseLayout';

import { postList } from '@/utils/postTypes';
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
  const [size, /* setSize */] = useState("6");
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
      console.log(postsData); // Log dos dados recebidos
      setPosts(postsData);
    } catch (error) {
      alert('Ocorreu um erro inesperado. Tente novamente.');
      console.log(error);
    }
  };


  useEffect(() => {
    onLoad()
  }, [])
  return (
    <BaseLayout>
      {/* <HighLights posts={postList} /> */}

      <PaginationList>
        <Suspense fallback={<p>Loading feed...</p>}>
          {posts.slice(0, posts.length).map((post, index) => (
            <Post key={index} {...post} type="column" />
          ))}
        </Suspense>
      </PaginationList>
    </BaseLayout>
  );
};

export default HomePage;
