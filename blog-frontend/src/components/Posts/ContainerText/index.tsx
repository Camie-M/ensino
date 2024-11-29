import React from 'react';
import * as S from './styled';

export interface ConteinerTextProps {
    author: string;
    title: string;
    text: string;
    createdAt: string;
}

const ConteinerText: React.FC<ConteinerTextProps> = ({ author, title, text, createdAt }) => {
    const dataFix = new Date(createdAt);

    // Formatar data
    let formattedDate = dataFix
        .toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        })
        .replace(" de ", " ")
        .replace(". de", " ");

    // Capitalizar a primeira letra do mês
    formattedDate = formattedDate
        .split(' ')
        .map((word, index) =>
            index === 1 ? word.charAt(0).toUpperCase() + word.slice(1) : word
        )
        .join(' ');

    return (
        <S.ContainerText>
            <S.Data>
                {author} • {formattedDate}
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
