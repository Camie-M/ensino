import type { FunctionComponent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import * as S from "./styled"
import TextInput from "../FormItems/TextInput";


const LoginForm: FunctionComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const userResponse = await fetch('http://localhost:3001/users', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });
            if (!userResponse.ok) {
                alert("Usuário não encontrado ou credenciais inválidas.");
                return;
            }
            const jsonData = JSON.stringify(data);
            const base64Data = btoa(jsonData);

            const tokenResponse = await fetch('http://localhost:3001/auth/token', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(base64Data),
            });
            if (!tokenResponse.ok) {
                alert("Erro ao gerar o token de sessáo");
                return;
            }
        } catch (error) {
            alert("Ocorreu um erro inesperado. Tente novamente.");
            console.log(error);
        }
    };
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
                    label="Usuário"
                    id="usuario"
                    placeholder="Insira o nome de usuário"
                    register={register}
                    required
                />
                {errors.title && <span>Esse campo é obrigatório</span>}

                <TextInput
                    label="Senha"
                    id="senha"
                    placeholder="Insira sua senha"
                    register={register}
                    required
                />
                {errors.title && <span>Esse campo é obrigatório</span>}
                <S.Button type="submit">Logar</S.Button>
            </S.Form>
        </S.div>

    )
}

export default LoginForm