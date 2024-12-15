import React, { useEffect, useState } from 'react';
import * as S from './styled';
import ConteinerText, { ConteinerTextProps } from './ContainerText/ContainerText';
import ImgContainer, { PostImg } from './ImgContainer/ImgContainer';
import { PostDataProp } from '@/utils/fetchPosts';
import { useRouter } from 'next/router';

export interface PostsProps extends PostImg, ConteinerTextProps, PostDataProp {
  type?: 'column' | 'row';
}

const Post: React.FC<PostsProps> = ({ type = 'column', ...props }) => {
  const [currentType, setCurrentType] = useState(type);
  const router = useRouter();
  useEffect(() => {
    setCurrentType(type);
  }, [type]);



  const handleNavigation = () => {
    router.push(`/post/${props.id}`);
  };

  return (
    <S.ContainerAnchor type={currentType} onClick={handleNavigation}>
      <ImgContainer image={props.image} />
      <ConteinerText createdAt={props.createdAt} author={props.author} title={props.title} text={props.text} />
    </S.ContainerAnchor >
  );
};

export default Post;