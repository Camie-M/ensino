import React, { useState, forwardRef } from 'react';
import * as S from './styled';

interface ButtonDropFileProps {
    setImage: React.Dispatch<React.SetStateAction<File | null>>;
    createImagePreview: (file: File) => void;
}

const ButtonDropFile = forwardRef<HTMLInputElement, ButtonDropFileProps>(
    ({ setImage, createImagePreview }, ref) => {
        const [fileName, setFileName] = useState<string>('Nenhum arquivo selecionado');

        const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.target.files?.[0];

            if (file) {
                setImage(file);
                createImagePreview(file);
                setFileName(file.name);
            } else {
                setImage(null);
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
                    ref={ref}
                />
                <S.FileName>{fileName}</S.FileName>
            </S.Container>
        );
    }
);

// Adicionando o displayName para depuração por conta do forwardRef
ButtonDropFile.displayName = 'ButtonDropFile';

export default ButtonDropFile;
