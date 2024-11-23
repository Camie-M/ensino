import type { FunctionComponent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import * as S from "./styled"
import TextInput from "../FormItems/TextInput";


type Props = {
    isEdit: boolean;
}

const LoginForm: FunctionComponent<Props> = ({
    isEdit,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

    return (
        <S.div>
            <S.Title>
                Bem vindos ao THE BLOG
            </S.Title>
            <S.Aviso>
                Preencha os campos com os dados fornecidos por seu coordenador
            </S.Aviso>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    label="Usúario"
                    id="title"
                    placeholder="Insira o nome de usuario"
                    register={register}
                    required
                />
                {errors.title && <span>Esse campo é obrigatório</span>}

                <TextInput
                    label="Senha"
                    id="password"
                    placeholder="Insira sua senha"
                    register={register}
                    required
                />
                {errors.title && <span>Esse campo é obrigatório</span>}
                <S.Button>Logar</S.Button>
            </S.Form>
        </S.div>

    )
}

export default LoginForm