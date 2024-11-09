import React from 'react';
import * as S from './styled';


const Posts: React.FC = () => {
    return (
        <S.Container>
            <S.img src="./imgs/IMG1.png" alt="Teste" />
            <S.Container>
                <S.Data>
                    Sunday, 1 jan 2023
                </S.Data>
                <S.Title>
                    Ux review presentations
                </S.Title>
                <S.Text>
                    How do you create compelling presentations that wow your colleagues and impress your managers?
                </S.Text>
            </S.Container>
        </S.Container>
    );
};

export default Posts