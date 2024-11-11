import React, { Children, useEffect, useState } from 'react';
import * as S from './styled';


export interface ConteinerTextProps {
    author: string,
    title: string,
    text: string,
}

const ConteinerText: React.FC<ConteinerTextProps> = ({ author, title, text }) => {
    return (
        <S.ContainerText>
            <S.Data>
                {author}
            </S.Data>
            <S.Title>
                {title}
            </S.Title>
            <S.Text>
                {text}
            </S.Text>
        </S.ContainerText>
    );
};

export default ConteinerText;