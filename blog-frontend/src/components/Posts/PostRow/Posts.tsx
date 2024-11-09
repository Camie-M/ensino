import React, { useEffect, useState } from 'react';
import * as S from './styled';

const PostColumn: React.FC = () => {

    return (
        <S.Container>
            <S.ContainerImg>
                <S.img src="./imgs/teste.jpg" alt="Teste" />
            </S.ContainerImg>
            <S.ContainerText>
                <S.Data>
                    Sunday, 1 jan 2023
                </S.Data>
                <S.Title>
                    Grid system for better Design User Interface
                </S.Title>
                <S.Text>
                    A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
                </S.Text>
            </S.ContainerText>
        </S.Container>
    );
};

export default PostColumn;