import type { FunctionComponent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import * as S from "./styled";

import TextInput from "../FormItems/TextInput";
import TextareaInput from "../FormItems/TextareaInput";
import ImageUploadField from "../FileUpload";
import Button from "../FormItems/Button";

type Props = {
    isEdit: boolean;
    defaultValueTitle?: string;
    defaultValueText?: string;
    defaultValueImage?: string
};

const PostForm: FunctionComponent<Props> = ({
    isEdit,
    defaultValueTitle,
    defaultValueText,
    defaultValueImage
}) => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<FieldValues>();

    const handleForm = async (data: FieldValues) => {
        const token = localStorage.getItem("token");
        const path = window.location.pathname;
        const pathParts = path.split('/');
        const id = pathParts[pathParts.length - 1];
        let response:Response;
        if (token) {
            try {
                const formData = new FormData();
                formData.append('title', data.title);
                formData.append('text', data.text);
                if (data.image instanceof File) {
                    formData.append('image', data.image);
                }
                if(isEdit){
                    response = await fetch(`http://localhost:3001/posts/${id}`, {
                        method: "PUT",
                        headers: {
                            'Authorization': `${token}`,
                        },
                        body: formData,
                    });
                }else{
                    response = await fetch(`http://localhost:3001/posts`, {
                        method: "POST",
                        headers: {
                            'Authorization': `${token}`,
                        },
                        body: formData,
                    });
                }
                if (!response.ok) {
                    console.error(response);
                    throw new Error("Falha ao enviar o post");
                }

                const result = await response.json();
                console.log("Post enviado com sucesso:", result);
            } catch (error) {
                console.error("Erro ao enviar o post:", error);
            }
        } else {
            console.error("Falha ao obter o token");
        }
    };


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        handleForm(data) 
    };

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                label="Título do post"
                id="title"
                placeholder="Insira título do post"
                register={register}
                defaultValue={defaultValueTitle ? defaultValueTitle : ''}
                required
            />
            {errors.title && <span>Esse campo é obrigatório</span>}

            <TextareaInput
                label="Texto do post"
                id="text"
                placeholder="Insira texto do post"
                register={register}
                defaultValue={defaultValueText ? defaultValueText : ''}
                required
            />
            {errors.text && <span>Esse campo é obrigatório</span>}

            <ImageUploadField
                id="image"
                register={register}
                setValue={setValue}
                defaultValue={defaultValueImage ? defaultValueImage : ''}
                required={true}
            />


            <Button label={isEdit ? "Editar" : "Criar"} type="submit" />
        </S.Form>
    );
};

export default PostForm;
