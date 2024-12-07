import React, { useEffect, useState } from 'react';
import HighLights from '@/components/Highlights/';
import BaseLayout from '@/components/BaseLayout';
import styled from 'styled-components';
import { PostFetch, PostDataProp } from '@/utils/fetchPosts';
import PaginatedPosts from '@/components/Posts/PaginatedPosts/PaginatedPosts';

export const Title = styled.h1`
    font-size: clamp(1.2rem, 5vw, 1.5rem); 
    font-weight:500;
    color: ${(props) => props.theme.colors.titles};
    margin:3rem auto;
`;

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostDataProp[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await PostFetch();
      if (data) {
        setPosts(data);
      }
    };
    fetchPosts();
  }, []);


  return (
    <BaseLayout banner={true}>
      <Title>Posts publicados recentemente</Title>
      {posts.length > 0 && <HighLights posts={posts} />}
      <Title>Todos os Posts</Title>
      <PaginatedPosts posts={posts} />
    </BaseLayout>
  );
};

export default HomePage;