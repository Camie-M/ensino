
import BaseLayout from '@/app/components/BaseLayout';
import { UserFormData } from "@/app/components/FormUser";
import FormUser from "@/app/components/FormUser";
import { LoginUser } from '@/app/Services/Users/api';
import * as S from "./styled";
import { useAuth } from '@/app/context/AuthContext';

export default function Login() { 
  const { login } = useAuth();

  const handleSave = async (formData: UserFormData) => {
    const userData = await LoginUser(formData);
    if (!userData) {
      console.error('Erro no login, usuário não autenticado');
      return;
    } 
    login();
    
  };

  return (
    <BaseLayout>
      <S.Container>
        <FormUser onSubmit={handleSave} />
      </S.Container>
    </BaseLayout>
  );
}
