import React from 'react';
import * as S from './styled';

const Tabela: React.FC = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Megha</td>
                    <td>19</td>
                    <td>Female</td>
                </tr>
                <tr>
                    <td>Subham</td>
                    <td>25</td>
                    <td>Male</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Tabela;