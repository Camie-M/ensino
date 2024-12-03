import React, { useState, forwardRef } from 'react';
import * as S from './styled';

interface ButtonDropFileProps {
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
    createImagePreview: (file: File) => void;
}

// Utilizando React.forwardRef para aceitar refs
const ButtonDropFile = forwardRef<HTMLInputElement, ButtonDropFileProps>(
    ({ setImage, createImagePreview }, ref) => {
        const [fileName, setFileName] = useState<string>('Nenhum arquivo selecionado');

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];

            if (file) {
                setImage(file); // Passa o valor diretamente
                createImagePreview(file);
                setFileName(file.name);
            } else {
                setImage(null); // Limpa o estado diretamente
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
                    onChange={handleFileChange}
                    ref={ref} // Passa o ref do React.forwardRef
                />
                <S.FileName>{fileName}</S.FileName>
            </S.Container>
        );
    }
);

export default ButtonDropFile;
