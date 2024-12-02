import React from "react";
import * as S from "./styled";
import PostCentral from "../PostCentral/postCentral";
import PostRight from "../PostRight/postRight";

interface Post {
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts: React.FC<RecentPostsProps> = ({ posts }) => {
  if (posts.length < 4) return null; // Garante que há posts suficientes

  const [latest, second, third, fourth] = posts;

  return (
    <S.RecentPostsContainer>
      <S.TopRow>
        <S.LastPost>
          <PostCentral {...latest} />
        </S.LastPost>
        <div>
          <PostRight {...second} />
          <PostRight {...third} />
        </div>
      </S.TopRow>
      <S.FullWidthPost>
        <PostRight {...fourth} />
      </S.FullWidthPost>
    </S.RecentPostsContainer>
  );
};

export default RecentPosts;
