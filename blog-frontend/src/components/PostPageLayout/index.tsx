import React, { useEffect, useState } from 'react';
import * as S from "./styled"
import ImgContainer from '../Posts/ImgContainer';
import DataFormat from '@/utils/dataformat';

interface PropContentPost {
  title: string;
  text: string;
  author: string;
  image: string;
  date: string;
}

const PostPageLayout: React.FC<PropContentPost> = ({ title, text, author, image, date }) => {
  const [postDate, setPostDate] = useState<string>(date);
  useEffect(() => {
    const DateFix = async () => {
      const data = await DataFormat(date);
      if (data) {
        setPostDate(data);
      }
    };
    DateFix();
  }, []);

  return (
    <S.Container>
      <S.Data> {author} • {postDate}</S.Data>
      <S.Title>{title}</S.Title>
      <ImgContainer image={image} />
      <S.Content>{text}</S.Content>
    </S.Container>
  );
};

export default PostPageLayout;