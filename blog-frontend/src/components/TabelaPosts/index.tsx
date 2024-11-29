import React from 'react';
import * as S from './styled';

const TabelaPost: React.FC = () => {
    return (
        <S.Tabela>
            <S.Thead>
                <S.Tr>
                    <S.Th>Author</S.Th>
                    <S.Th>Titulo</S.Th>
                    <S.Th>Post</S.Th>
                    <S.Th>Role</S.Th>
                    <S.Th>Ações</S.Th>
                </S.Tr>
            </S.Thead>
            <S.Tbody>
                <S.Tr>
                    <S.Td>Breno</S.Td>
                    <S.Td>O que é javascript</S.Td>
                    <S.Td><S.Span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.Lorem, ipsum dolor sit amet consectetur adipisicing elit.</S.Span></S.Td>
                    <S.Td>Admin</S.Td>
                    <S.Td>Edit</S.Td>
                </S.Tr>
            </S.Tbody>
        </S.Tabela>
    );
};

export default TabelaPost;
