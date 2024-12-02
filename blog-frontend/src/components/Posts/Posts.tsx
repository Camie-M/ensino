import React, { useEffect, useState } from 'react';
import * as S from './styled';
import ConteinerText, { ConteinerTextProps } from './ContainerText';
import ImgContainer, { PostImg } from './ImgContainer';
import { PostDataProp } from '@/utils/fetchPosts';

export interface PostsProps extends PostImg, ConteinerTextProps, PostDataProp {
    type?: 'column' | 'row';
}

const Post: React.FC<PostsProps> = ({ type = 'column', createdAt, image, author, title, text, id }) => {
    const [currentType, setCurrentType] = useState(type);
    useEffect(() => {
        setCurrentType(type); // Atualiza 'currentType' se o 'type' for passado
    }, [type]);

    return (
        <S.ContainerAnchor type={currentType} href={"post/" + id}>
            <ImgContainer image={image} />
            <ConteinerText createdAt={createdAt} author={author} title={title} text={text} />
        </S.ContainerAnchor >
    );
};

export default Post;