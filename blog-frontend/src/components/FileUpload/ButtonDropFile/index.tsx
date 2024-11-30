import React, { useState } from 'react';
import * as S from './styled';

interface ButtonDropFileProps {
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
    createImagePreview: (file: File) => void;
}

const ButtonDropFile: React.FC<ButtonDropFileProps> = ({ setImage, createImagePreview }) => {
    const [fileName, setFileName] = useState<string>('Nenhum arquivo selecionado');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            setImage(file);
            createImagePreview(file);
            setFileName(file.name);
        } else {
            setFileName('Nenhum arquivo selecionado');
        }
    };

    return (
        <S.Container>
            <S.Label htmlFor="fileInput">Escolher arquivo</S.Label>
            <S.HiddenInput
                id="fileInput"
                type="file"
                accept="image/png, image/jpeg, image/svg, image/jpg"
                onChange={handleFileChange} // Chama handleFileChange ao selecionar um arquivo
            />
            {/* <S.FileName>{fileName}</S.FileName> */}
        </S.Container>
    );
};

export default ButtonDropFile;
