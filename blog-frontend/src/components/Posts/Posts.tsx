import React, { useEffect, useState } from 'react';
import * as S from './styled';
import ConteinerText, { ConteinerTextProps } from './ContainerText';
import ImgContainer, { PostImg } from './ImgContainer';

interface PostsProps extends PostImg, ConteinerTextProps {
    type?: string;
}

const Post: React.FC<PostsProps> = ({ type = 'column', img, alt, author, title, text }) => {
    const [currentType, setCurrentType] = useState(type);

    useEffect(() => {
        setCurrentType(type); // Atualiza 'currentType' se o 'type' for passado
    }, [type]);

    return (
        <S.Container type={currentType}>
            <ImgContainer img={img} alt={alt} />
            <ConteinerText author={author} title={title} text={text} />
        </S.Container >
    );
};

export default Post;