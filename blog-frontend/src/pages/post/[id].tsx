import React, { useEffect, useState } from "react";
import BaseLayout from "@/components/BaseLayout";
import Post from "@/components/Posts/Posts";
import PostPageLayout from "@/components/PostPageLayout/PostPageLayout";
import * as S from "./styled";
import { PostDataProp, getAllPosts, getPostById } from "@/utils/fetchPosts";
import styled from "styled-components";
import PaginationList from "@/components/ListLayouts";
import { themeInterface } from "@/styles/themes/themeInterface";
import { useRouter } from "next/router";

const Title = styled.h1`
  font-size: clamp(1.2rem, 5vw, 1.5rem);
  font-weight: 500;
  color: ${(props) => props.theme.colors.titles};
  margin-top: 1rem;
`;

interface PostPageProps extends themeInterface {
  post: PostDataProp;
  relatedPosts: PostDataProp[] | null;
}

const PostPage: React.FC<PostPageProps> = ({ toggleTheme }) => {
  const [posts, setPosts] = useState<PostDataProp[]>([]);
  const [post, setPost] = useState<PostDataProp | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getAllPosts();
      if (data) setPosts(data);
    };

    const fetchPostById = async () => {
      if (id) {
        const data = await getPostById(id as string);
        if (data) setPost(data);
      }
    };

    fetchPosts();
    fetchPostById();
  }, [id]);

  return (
    <BaseLayout banner={false} toggleTheme={toggleTheme}>
      <S.GridContainer>
        <S.LeftGrid>
          <Title>Posts Recentes</Title>
          <PaginationList>
            {posts.slice(0, 3).map((postItem) => (
              <Post key={postItem.id} {...postItem} type="column" />
            ))}
          </PaginationList>
        </S.LeftGrid>
        <S.RightGrid>
          {post ? (
            <PostPageLayout
              title={post.title}
              text={post.text}
              author={post.author}
              image={post.image}
              date={post.createdAt}
            />
          ) : (
            <p>Post indisponível</p>
          )}
        </S.RightGrid>
      </S.GridContainer>
    </BaseLayout>
  );
};

export default PostPage;
