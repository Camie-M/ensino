import React from "react";
import BaseLayout from "@/components/BaseLayout";
import Post from "@/components/Posts/Posts";
import PostPageLayout from "@/components/PostPageLayout/PostPageLayout";
import * as S from "./styled";
import { PostDataProp } from "@/utils/fetchPosts";
import styled from "styled-components";

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

const PostPage: React.FC<PostPageProps> = ({ post, relatedPosts }) => {
  const displayedPosts = relatedPosts?.slice(0, 4);

  return (
    <BaseLayout banner={false}>
      <S.GridContainer>
        <S.LeftGrid>
          <Title>Posts Recentes</Title>
          {displayedPosts && displayedPosts.length > 0 ? (
            displayedPosts.map((relatedPost) => (
              <Post key={relatedPost.id} {...relatedPost} type="column" />
            ))
          ) : (
            <p>Nenhum post relacionado encontrado.</p>
          )}
        </S.LeftGrid>
        <S.RightGrid>
          <PostPageLayout
            title={post.title}
            text={post.text}
            author={post.author}
            image={post.image}
            date={post.createdAt}
          />
        </S.RightGrid>
      </S.GridContainer>
    </BaseLayout>
  );
};


export const getServerSideProps = async ({ params }: { params: { id: string } }) => {
  const mockPosts = (await import("@/mocks/posts.json")).default.posts;

  const postId = params.id;
  const post = mockPosts.find((p: PostDataProp) => p.id === postId) || null;
  const relatedPosts = post
    ? mockPosts.filter((p: PostDataProp) => p.id !== postId).slice(0, 5)
    : null;

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export default PostPage;
