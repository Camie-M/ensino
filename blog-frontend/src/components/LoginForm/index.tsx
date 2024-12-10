import { useContext, type FunctionComponent } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import * as S from "./styled";
import TextInput from "../FormItems/TextInput";
import { useRouter } from "next/navigation"; // Importação do useRouter
import { UserContext } from "@/context/UserContext";
import { TokenGenerator } from "@/utils/fetchPosts";

const LoginForm: FunctionComponent = () => {
    const router = useRouter(); // Definindo o router
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>();
    const { changeIsAuthorized } = useContext(UserContext);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const token = await TokenGenerator(data);
            console.log("Token gerado: ", token); // Adicione um console.log para verificar o token
            if (token) {
                localStorage.setItem('token', token);
                changeIsAuthorized(true); // Atualize o estado de autorização
                router.push('/home');
            } else {
                alert("Falha na autenticação.");
            }
        } catch (error) {
            alert("Ocorreu um erro inesperado. Tente novamente.");
            changeIsAuthorized(false); // Garantir que o estado de autorização seja falso em caso de erro
            console.log(error);
        }
    };

    return (
        <S.div>
            <S.Title>Bem vindos ao THE BLOG</S.Title>
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
                />
                {errors.senha && <span>Esse campo é obrigatório</span>}

                <S.Button type="submit">Logar</S.Button>
            </S.Form>
        </S.div>
    );
};

export default LoginForm;
