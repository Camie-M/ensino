import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { RefreshControl, SafeAreaView, Text } from 'react-native';
import * as S from "./styled"

import Lista from '@/app/components/Lista';
import Button from '@/app/components/Button';
import { getAllPosts } from '@/app/Services/Posts/api';
import PostDataProp from '@/app/types/post';
import BaseLayout from '@/app/components/BaseLayout';

export default function Admin() {
  const [posts, setPosts] = useState<PostDataProp[]>([]);  
  const [refreshing, setRefreshing] = React.useState(false);
  const fetchPosts = async () => {
    try {
      const data = await getAllPosts();
      if (data) {
        setPosts(data);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      fetchPosts()
      setRefreshing(false);
    }, 2000);
  };

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <BaseLayout>
      <S.Container>
        <Button
          text={"Criar novo Post"}
          color={"#3b9aff"}
          route={"CreatePost"} 
          width={'80%'}        />
      </S.Container>
      <S.Title>Gestão de Posts</S.Title>
      <Lista posts={posts} 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }/>
    </BaseLayout>
  );
}
