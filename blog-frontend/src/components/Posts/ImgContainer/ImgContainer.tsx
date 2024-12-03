import React from 'react';
import * as S from './styled';
import Image from 'next/image';

export interface PostImg {
  image: string;
}

const ImgContainer: React.FC<PostImg> = ({ image }) => {
  if (!image) return

  return (
    <S.ContainerImg>
      <Image
        src={image}
        alt="Picture of the author"
        width={400}
        height={200}
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '18rem',
          borderRadius: '0.5rem'
        }}
        priority
      />
    </S.ContainerImg>
  );
};


export default ImgContainer;