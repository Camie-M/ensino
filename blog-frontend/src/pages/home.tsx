import React, { useEffect, useState } from 'react';
import HighLights from '@/components/Highlights/';
import BaseLayout from '@/components/BaseLayout';
import Post from '@/components/Posts/Posts';
import PaginationList from '@/components/ListLayouts';
import ImageUploadField from '@/components/FileUpload';
import TabelaPost from '@/components/TabelaPosts';

import PostFetch from '@/utils/fetchPosts';

interface PostData {
  id: string;
  createdAt: string;
  title: string;
  text: string;
  author: string;
  image: string;
  // PostFetch: () => void;
}

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<PostData[]>([]);

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
    <BaseLayout>
      {/* <HighLights posts={posts} /> */}
      {/* <ImageUploadField /> */}
      {/* <PaginationList>
        {posts.map((post, index) => (
          <Post key={index} {...post} type="column" />
        ))}
      </PaginationList> */}

      <TabelaPost />
    </BaseLayout>
  );
};

export default HomePage;
