import React from "react";
import { useRouter } from "next/router";
import * as S from "./styled";
import ConteinerText from "./ContainerText/ContainerText";
import ImgContainer from "./ImgContainer/ImgContainer";

export interface PostsProps {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
  createdAt: string;
  type?: "column" | "row";
}

const Post: React.FC<PostsProps> = ({ type = "column", ...props }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/post/${props.id}`);
  };

  return (
    <S.ContainerAnchor type={type} onClick={handleNavigation}>
      <ImgContainer image={props.image} type={type} />
      <ConteinerText {...props} />
    </S.ContainerAnchor>
  );
};

export default Post;
