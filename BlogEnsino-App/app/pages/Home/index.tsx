import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import BaseLayout from "../../components/BaseLayout";
import Search from "../../components/Search";
import PaginatedPosts from "../../components/Posts/PaginatedPosts";
import mockPosts from "./mockPosts";
import * as S from "./styled";

const Home: React.FC = () => {
  const [posts, setPosts] = useState(mockPosts); 
  const [filteredPosts, setFilteredPosts] = useState(mockPosts);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, posts]);

  return (
    <BaseLayout>
      <S.HeaderSection>
        <S.Title>Posts publicados recentemente</S.Title>
        <Search onSearch={(query) => setSearchTerm(query)} />
      </S.HeaderSection>
      <PaginatedPosts posts={posts} searchTerm={searchTerm} /> 
    </BaseLayout>
  );
};

export default Home;
