import React, { Children, useEffect, useState } from 'react';
import * as S from './styled';

export interface PostImg {
    image: string,
}

const ImgContainer: React.FC<PostImg> = ({ image }) => {
    return (
        <S.ContainerImg>
            <S.img src={image} />
        </S.ContainerImg>
    );
};

export default ImgContainer;