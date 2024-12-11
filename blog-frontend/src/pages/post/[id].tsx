import React, { useEffect, useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import Post from "@/components/Posts/Posts";
import PostPageLayout from "@/components/PostPageLayout/PostPageLayout";
import * as S from "./styled";
import { PostDataProp, getAllPosts, getPostById } from "@/utils/fetchPosts";
import styled from "styled-components";
import PaginationList from "@/components/ListLayouts";

const Title = styled.h1`
  font-size: clamp(1.2rem, 5vw, 1.5rem);
  font-weight: 500;
  color: ${(props) => props.theme.colors.titles};
  margin-top: 1rem;
`;

interface PostPageProps {
  post: PostDataProp;
  relatedPosts: PostDataProp[] | null;
}

const PostPage: React.FC<PostPageProps> = () => {
  // const displayedPosts = relatedPosts?.slice(0, 4);
  const [posts, setPosts] = useState<PostDataProp[]>([]);
  const [post, setPost] = useState<PostDataProp | null>(null);

  useEffect(() => {
    const urlPath = window.location.pathname;
    const postId = urlPath.split('/').pop();

    const fetchPosts = async () => {
      const data = await getAllPosts();
      if (data) {
        setPosts(data);
      }
    };
    const fetchPostById = async () => {
      if (postId) {
        const data = await getPostById(postId);
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
      <S.GridContainer>
        <S.LeftGrid>
          <Title>Posts Recentes</Title>
          {post && (
            <PaginationList>
              {posts.slice(0, 3).map((post, index) => (
                <Post key={index} {...post} type="column" />
              ))}
            </PaginationList>
          )}
        </S.LeftGrid>
        <S.RightGrid>
          {post ?
            <PostPageLayout
              title={post.title}
              text={post.text}
              author={post.author}
              image={post.image}
              date={post.createdAt}
            /> : "Post indisponivel"
          }

        </S.RightGrid>
      </S.GridContainer>
    </BaseLayout>
  );
};

export default PostPage;
