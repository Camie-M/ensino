import type { FunctionComponent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import * as S from "./styled"

import TextInput from "../FormItems/TextInput";
import TextareaInput from "../FormItems/TextareaInput";
import ImageUploadField from "../FileUpload";
import Button from "../FormItems/Button";

type Props = {
    isEdit: boolean;
    defaultValueTitle?: string;
    defaultValueText?: string;
}

const PostForm: FunctionComponent<Props> = ({
    isEdit,
    defaultValueTitle,
    defaultValueText
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

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

                <ImageUploadField />

                <Button label={isEdit ? "Editar" : "Criar"} type="submit" />
            </S.Form>
    )
}

export default PostForm