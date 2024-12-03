import React from "react";
import * as S from "./styled";
import Post from "../Posts";

interface Post {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
  createdAt: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  if (posts.length < 4) return null;

  return (
    <S.RecentPostsContainer>
      <S.TopRow>
        <S.LastPost>
          <Post {...posts[0]} type="column" />
        </S.LastPost>
        <S.SidePosts>
          <Post {...posts[1]} type="row" />
          <Post {...posts[2]} type="row" />
        </S.SidePosts>
      </S.TopRow>
      <S.FullWidthPost>
        <Post {...posts[3]} type="column" />
      </S.FullWidthPost>
    </S.RecentPostsContainer>
  );
};

export default RecentPosts;
