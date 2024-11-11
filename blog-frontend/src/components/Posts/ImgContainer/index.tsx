import React, { Children, useEffect, useState } from 'react';
import * as S from './styled';

export interface PostImg {
    img: string,
    alt: string
}

const ImgContainer: React.FC<PostImg> = ({ img, alt }) => {
    return (
        <S.ContainerImg>
            <S.img src={img} alt={alt} />
        </S.ContainerImg>
    );
};

export default ImgContainer;