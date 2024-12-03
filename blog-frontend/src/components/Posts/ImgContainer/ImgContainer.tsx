import React from "react";
import * as S from "./styled";
import Image from "next/image";

export interface PostImg {
  image: string;
  type: "column" | "row";
}

const ImgContainer: React.FC<PostImg> = ({ image, type }) => {
  if (!image) return null;

  return (
    <S.ContainerImg type={type}>
      <Image
        src={image}
        alt="Picture of the post"
        layout="fill"
        objectFit="cover"
        priority
      />
    </S.ContainerImg>
  );
};

export default ImgContainer;
