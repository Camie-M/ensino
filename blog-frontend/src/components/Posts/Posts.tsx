import React, { useEffect, useState } from 'react';
import * as S from './styled';
import ConteinerText, { ConteinerTextProps } from './ContainerText';
import ImgContainer, { PostImg } from './ImgContainer';

export interface PostsProps extends PostImg, ConteinerTextProps {
    type?: 'column' | 'row';
}

const Post: React.FC<PostsProps> = ({ type = 'column', createdAt, image, author, title, text }) => {
    const [currentType, setCurrentType] = useState(type);

    useEffect(() => {
        setCurrentType(type); // Atualiza 'currentType' se o 'type' for passado
    }, [type]);

    return (
        <S.Container type={currentType}>
            <ImgContainer image={image} />
            <ConteinerText createdAt={createdAt} author={author} title={title} text={text} />
        </S.Container >
    );
};

export default Post;