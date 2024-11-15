// pages/index.tsx
import React, { useEffect, useState } from 'react';
import * as S from "./styled"

interface PaginationProps {
    children: React.ReactNode;
    size?: string;
    pagination?: boolean;
}

const PaginationList: React.FC<PaginationProps> = ({ pagination = false, size = "6", children, }) => {
    const [currentsize, setSize] = useState(size)
    const [hasPagination, sethasPagination] = useState(pagination)

    useEffect(() => {
        setSize(size)
        sethasPagination(pagination)
    }, [size, pagination])

    return (
        <S.Container size={currentsize} pagination={hasPagination}>
            {children}
        </S.Container>
    );
};

export default PaginationList;
