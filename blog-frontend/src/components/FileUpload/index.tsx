import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineFileUpload } from 'react-icons/md';
import ImgContainer from '../Posts/ImgContainer/ImgContainer';
import ButtonDropFile from './ButtonDropFile';
import { FieldValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';

type Props = {
    register: UseFormRegister<FieldValues>;
    setValue: UseFormSetValue<FieldValues>;
    required?: boolean;
    defaultValue?: string;
    id: string;
}

const ImageUploadField: React.FC<Props> = ({
    register,
    setValue,
    required,
    defaultValue,
    id
}) => {
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
            const file = droppedFiles[0];
            setImage(file);
            setValue(id, file);
            createImagePreview(file);
        }
    };

    const createImagePreview = (file: File) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        if (defaultValue && !preview) {
            setPreview(defaultValue);
        }
    }, [defaultValue, preview]);

    useEffect(() => {
        if (!image) {
            setValue(id, null); // Limpa o valor no formulário se a imagem for removida
        }
    }, [image, id, setValue]);

    return (
        <S.Container>
            <S.dropDownField onDragOver={handleDragOver} onDrop={handleDrop}>
                {image || preview ? (
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
                    {image || preview
                        ? 'Imagem carregada, arraste ou clique no botão para trocar'
                        : 'Arraste uma imagem ou clique para selecionar um arquivo'}
                </S.Title>

                <ButtonDropFile
                    {...register(id)}
                    setImage={(file) => {
                        if (file instanceof File) {
                            setImage(file);
                            setValue(id, file); // Armazena diretamente o arquivo
                            createImagePreview(file);
                        } else {
                            console.error('Arquivo inválido:', file);
                        }
                    }}
                    createImagePreview={createImagePreview}
                />
            </S.dropDownField>

            {(image || preview) ? (
                <S.ImgPreviewContainer>
                    {image && <S.Title>Arquivo selecionado: {image.name}</S.Title>}
                    {preview && <ImgContainer image={preview} />}
                </S.ImgPreviewContainer>
            ) : (
                <S.Title>Nenhum arquivo selecionado</S.Title>
            )}
        </S.Container>
    );
};

export default ImageUploadField;