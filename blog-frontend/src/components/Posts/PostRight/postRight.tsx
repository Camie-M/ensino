import React from "react";
import * as S from "./styled";

interface PostProps {
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
}

const PostRight: React.FC<PostProps> = ({ title, text, author, image, date }) => {
  return (
    <S.PostRightContainer>
      <S.Image src={image} alt={title} />
      <S.TextContainer>
        <S.AuthorDate>
          <span>{author}</span> | <span>{date}</span>
        </S.AuthorDate>
        <S.Title>{title}</S.Title>
        <S.Summary>{text}</S.Summary>
      </S.TextContainer>
    </S.PostRightContainer>
  );
};

export default PostRight;
