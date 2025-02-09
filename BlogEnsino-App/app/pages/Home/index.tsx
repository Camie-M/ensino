import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import BaseLayout from "../../components/BaseLayout";
import Search from "../../components/Search";
import PaginatedPosts from "../../components/Posts/PaginatedPosts";
import { getAllPosts } from "@/app/Services/Posts/api";
import PostDataProp from "@/app/types/post";
import * as S from "./styled";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostDataProp[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostDataProp[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await getAllPosts();
      if (data) {
        setPosts(data);
        setFilteredPosts(data);
      }
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

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

      {loading ? (
        <Text>Carregando posts...</Text>
      ) : (
        <PaginatedPosts posts={filteredPosts} searchTerm={searchTerm} />
      )}
    </BaseLayout>
  );
};

export default Home;
