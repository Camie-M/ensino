import React, { useEffect, useState } from 'react';
import HighLights from '@/components/Highlights/';
import BaseLayout from '@/components/BaseLayout';
import Post from '@/components/Posts/Posts';
import PaginationList from '@/components/ListLayouts';
import styled from 'styled-components';
import { PostFetch, PostDataProp } from '@/utils/fetchPosts';

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
      <PaginationList>
        {posts.slice(4, posts.length).map((post, index) => (
          <Post key={index} {...post} type="column" />
        ))}
      </PaginationList>
    </BaseLayout>
  );
};

export default HomePage;
{/* <HighLights posts={posts} />
 <ImageUploadField /> 
<PaginationList>
  {posts.map((post, index) => (
    <Post key={index} {...post} type="column" />
  ))}
</PaginationList>

<TabelaPost /> */}