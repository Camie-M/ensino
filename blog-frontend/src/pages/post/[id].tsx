// pages/post/[id].tsx
import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import BaseLayout from "@/components/BaseLayout";
import { postList } from "@/utils/postTypes";
import Image from "next/image";
import { Container, Title, Text, Author, ImageWrapper } from "./styled";

interface PostProps {
  post: {
    title: string;
    text: string;
    author: string;
    image: string;
  };
}

const PostPage: React.FC<PostProps> = ({ post }) => {
  return (
    <BaseLayout>
      <Container>
        <Title>{post.title}</Title>
        <Text>{post.text}</Text>
        <Author>Author: {post.author}</Author>
        <ImageWrapper>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={600}
            priority={true}
          />
        </ImageWrapper>
      </Container>
    </BaseLayout>
  );
};

export default PostPage;

// Gera os caminhos das páginas estáticas
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postList.map((_, index) => ({
    params: { id: index.toString() },
  }));

  return {
    paths,
    fallback: false, // Define fallback como false para gerar apenas as páginas existentes
  };
};

// Busca os dados do post com base no ID
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const post = postList[Number(id)];

  // Verifica se o post existe
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
