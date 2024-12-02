import React from "react";
import * as S from "./styled";

interface PostProps {
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
}

const PostCentral: React.FC<PostProps> = ({ title, text, author, image, date }) => {
  return (
    <S.PostCentralContainer>
      <S.Image src={image} alt={title} />
      <S.PostContent>
        <S.AuthorDate>
          <span>{author}</span> | <span>{date}</span>
        </S.AuthorDate>
        <S.Title>{title}</S.Title>
        <S.Summary>{text}</S.Summary>
      </S.PostContent>
    </S.PostCentralContainer>
  );
};

export default PostCentral;
