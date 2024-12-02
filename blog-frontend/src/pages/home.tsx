import React, { useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import RecentPosts from "@/components/Posts/RecentPosts/RecentPosts";
import PaginatedPosts from "@/components/Posts/PaginatedPosts/PaginatedPosts";
import styled from "styled-components";
import mockPosts from "@/mocks/posts.json";
import * as S from "./styled";


const Title = styled.h1`
  font-size: clamp(1.2rem, 5vw, 1.5rem);
  font-weight: 500;
  color: ${(props) => props.theme.colors.titles};
  margin: 3rem auto;
`;

const HomePage: React.FC = () => {
  const [posts] = useState(
    mockPosts.posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  );

  return (
    <BaseLayout banner={true}>
      <S.Home>
        <Title>Posts publicados recentemente</Title>
        <RecentPosts posts={posts.slice(0, 4)} />
        <Title>Todos os Posts</Title>
        <PaginatedPosts posts={posts} />
      </S.Home>
    </BaseLayout>
  );
};

export default HomePage;