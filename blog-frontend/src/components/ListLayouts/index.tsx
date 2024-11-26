// pages/index.tsx
import React from 'react';
import * as S from "./styled"

interface PaginationProps {
    children: React.ReactNode;
}

const PaginationList: React.FC<PaginationProps> = ({ children }) => {
    return (
        <S.Container >
            {children}
        </S.Container>
    );
};

export default PaginationList;
