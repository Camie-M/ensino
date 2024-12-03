import React, { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./styled";

interface PropContentPost {
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
}

const PostPageLayout: React.FC<PropContentPost> = ({
  title,
  text,
  author,
  image,
  date,
}) => {
  const [postDate, setPostDate] = useState<string>("");

  useEffect(() => {
    const formatPostDate = () => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const formattedDate = new Date(date).toLocaleDateString("pt-BR", options);
      setPostDate(formattedDate);
    };

    formatPostDate();
  }, [date]);

  return (
    <S.Container>
      <S.Data>{postDate}</S.Data>
      <S.Title>{title}</S.Title>
      <S.ImageWrapper>
        <Image
          src={image}
          alt={`Imagem do post: ${title}`}
          layout="intrinsic"
          width={800}
          height={450}
          objectFit="cover"
          priority
        />
      </S.ImageWrapper>
      <S.Content>{text}</S.Content>
      <S.Author>Escrito por: {author}</S.Author>
    </S.Container>
  );
};

export default PostPageLayout;
