import React, { useEffect, useState } from "react";
import HighLights from "@/components/Highlights/";
import BaseLayout from "@/components/BaseLayout";
import PaginatedPosts from "@/components/Posts/PaginatedPosts/PaginatedPosts";
import styled from "styled-components";
import { getAllPosts, PostDataProp } from "@/utils/fetchPosts";
import Search from "@/components/Search/Search";

export const Title = styled.h1`
  font-size: clamp(1.2rem, 5vw, 1.5rem);
  font-weight: 500;
  color: ${(props) => props.theme.colors.titles};
  margin: 2rem 0rem;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostDataProp[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostDataProp[]>([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      if (data) {
        setPosts(data);
        setFilteredPosts(data);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredPosts(posts);
    } else {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(lowerCaseTerm) ||
          post.text.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredPosts(filtered);
    }
  }, [searchTerm, posts]);

  return (
    <BaseLayout banner={true}>
      <HeaderSection>
        <Title>Posts publicados recentemente</Title>
      </HeaderSection>
      {posts.length > 0 && <HighLights posts={posts} />}

      <HeaderSection>
        <Title>Todos os Posts</Title>
        <Search onSearch={(query) => setSearchTerm(query)} />
      </HeaderSection>

      <PaginatedPosts posts={filteredPosts} />
    </BaseLayout>
  );
};

export default HomePage;
