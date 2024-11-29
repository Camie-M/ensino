import React, { useState } from 'react';
import * as S from './styled';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineFileUpload } from 'react-icons/md';
import ImgContainer from '../Posts/ImgContainer';
import ButtonDropFile from './ButtonDropFile';

const ImageUploadField: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedImage = event.dataTransfer.files;
        if (droppedImage.length > 0) {
            const imageContent = droppedImage[0];
            setImage(imageContent);
            createImagePreview(imageContent);
        }
    };

    const createImagePreview = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    return (
        <S.Container>
            <S.dropDownField onDragOver={handleDragOver} onDrop={handleDrop}>
                {image ? (
                    <FaCheckCircle
                        aria-label="Imagem carregada"
                        style={{ fontSize: '2rem', color: '#28a745' }}
                    />
                ) : (
                    <MdOutlineFileUpload
                        aria-label="Arraste uma imagem"
                        style={{ fontSize: '2rem', color: '#000' }}
                    />
                )}
                <S.Title>
                    {image ? 'Imagem carregada' : 'Arraste uma imagem ou clique para selecionar um arquivo'}
                </S.Title>

                {/* Passa a função setImage ao filho */}
                <ButtonDropFile
                    setImage={(file) => {
                        setImage(file); // Atualiza o estado do pai
                        console.log('[ImageUploadField] Estado atualizado com arquivo do filho:', file); // Log ao receber arquivo do filho
                    }}
                    createImagePreview={createImagePreview} // Passa a lógica de pré-visualização
                />
            </S.dropDownField>

            {image ? (
                <S.ImgPreviewContainer>
                    <S.Title>Arquivo selecionado: {image.name}</S.Title>
                    {preview && <ImgContainer image={preview} />}
                </S.ImgPreviewContainer>
            ) : (
                <S.Title>Nenhum arquivo selecionado</S.Title>
            )}
        </S.Container>
    );
};

export default ImageUploadField;
