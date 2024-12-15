import { useContext, type FunctionComponent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import * as S from "./styled";
import TextInput from "../FormItems/TextInput";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import { TokenGenerator } from "@/utils/fetchPosts";

const LoginForm: FunctionComponent = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();
    const { changeIsAuthorized } = useContext(UserContext);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const token = await TokenGenerator(data);
            if (token) {
                localStorage.setItem('token', token);
                changeIsAuthorized(true); 
                router.push('/home');
            } else {
                alert("Falha na autenticação.");
            }
        } catch (error) {
            alert("Ocorreu um erro inesperado. Tente novamente.");
            changeIsAuthorized(false);
            console.error('Arquivo inválido:', error);
        }
    };

    return (
        <S.div>
            <S.Title>Bem vindos ao BLOG ENSINO</S.Title>
            <S.Aviso>Preencha os campos com os dados fornecidos por seu coordenador</S.Aviso>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    label="Usuário"
                    id="usuario"
                    placeholder="Insira o nome de usuário"
                    register={register}
                    required
                />
                {errors.usuario && <span>Esse campo é obrigatório</span>}

                <TextInput
                    label="Senha"
                    id="senha"
                    placeholder="Insira sua senha"
                    register={register}
                    required
                    type="password"
                />
                {errors.senha && <span>Esse campo é obrigatório</span>}

                <S.Button type="submit">Logar</S.Button>
            </S.Form>
        </S.div>
    );
};

export default LoginForm;
