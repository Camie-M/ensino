import React, { useEffect, useState } from 'react';
import * as S from './styled';

const Tabela: React.FC = () => {
    return (
        <S.Tabela>
            <thead>
                <tr>
                    <th>teste1</th>
                    <th>teste2</th>
                    <th>teste3</th>
                    <th>teste4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>a1</td>
                    <td>a2</td>
                    <td>a3</td>
                    <td>a4</td>
                </tr>
                <tr>
                    <td>b1</td>
                    <td>b2</td>
                    <td>b3</td>
                    <td>b4</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>teste</th>
                    <td>1</td>
                </tr>
            </tfoot>
        </S.Tabela>
    );
};

export default Tabela;