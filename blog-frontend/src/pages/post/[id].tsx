import React, { useEffect, useState } from 'react';
import BaseLayout from '@/components/BaseLayout';
import styled from 'styled-components';
import PaginationList from '@/components/ListLayouts';
import Post from '@/components/Posts/Posts';
import { PostFetch, PostFetchById, PostDataProp } from '@/utils/fetchPosts';
import PostPageLayout from '@/components/PostPageLayout';
import DataFormat from '@/utils/dataformat';

export const GridContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (max-width:1280px) {
      flex-wrap:wrap-reverse;
  }
`;

export const LeftGrid = styled.div`
  width: 30%;
  @media (max-width:1280px) {
    width: 100%;
  }
`;

export const RightGrid = styled.div`
  width: 80%;
  @media (max-width:1280px) {
    width: 100%;
  }
`;

const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<PostDataProp[]>([]);
  const [post, setPost] = useState<PostDataProp | null>(null);


  useEffect(() => {
    const urlPath = window.location.pathname;
    const postId = urlPath.split('/').pop();

    const fetchPosts = async () => {
      const data = await PostFetch();
      if (data) {
        setPosts(data);
      }
    };
    const fetchPostById = async () => {
      if (postId) {
        const data = await PostFetchById(postId);
        if (data) {
          setPost(data);
        }
      }
    };
    fetchPosts();
    fetchPostById();
  }, []);

  return (
    <BaseLayout banner={false}>
      <GridContainer>
        <LeftGrid>
          {post && (
            <PaginationList>
              {posts.slice(0, 5).map((post, index) => (
                <Post key={index} {...post} type="column" />
              ))}
            </PaginationList>
          )}
        </LeftGrid>
        <RightGrid>
          {post && (
            <PostPageLayout
              title={post.title}
              text={post.text}
              author={post.author}
              image={post.image}
              date={post.createdAt} />
          )}
        </RightGrid>
      </GridContainer>
    </BaseLayout>
  );
};

export default PostPage;
