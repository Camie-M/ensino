import React, { useEffect, useState } from 'react';
import * as S from './styled';
import DataFormat from '@/utils/dataformat';

export interface ConteinerTextProps {
    author: string;
    title: string;
    text: string;
    createdAt: string;
}

const ConteinerText: React.FC<ConteinerTextProps> = ({ author, title, text, createdAt }) => {
    const [date, setDate] = useState("")

    useEffect(() => {
        const DateFix = async () => {
            const data = await DataFormat(createdAt);
            if (data) {
                setDate(data);
            }
        };
        DateFix();

    })

    return (
        <S.ContainerText>
            <S.Data>
                {author} • {date}
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
