
  import BaseLayout from '@/app/components/BaseLayout';
  import { UserFormData } from "@/app/components/FormUser";
  import FormUser from "@/app/components/FormUser";
  import { LoginUser } from '@/app/Services/Users/api';
  import * as S from "./styled";
  import { useAuth } from '@/app/context/AuthContext';
  import { usePostId } from '@/app/context/PostContext';
  import { useNavigation } from '@react-navigation/native';
  import { StackNavigationProp } from '@react-navigation/stack';
  import RootStackParamList from '@/app/types/navigations';
  type PostNavigationProp = StackNavigationProp<RootStackParamList, 'PostDetails'>;
  export default function Login() { 

    const { login } = useAuth();
    const { postId } = usePostId();
    
    const navigation = useNavigation<PostNavigationProp>();

    const handleSave = async (formData: UserFormData) => {
      const userData = await LoginUser(formData);
      const id = postId;
    
      if (!userData) {
        console.error('Erro no login, usuário não autenticado');
        return;
      }
    
      login();
    
      navigation.navigate('Home');
    };
    

    return (
      <BaseLayout>
        <S.Container>
          <FormUser onSubmit={handleSave} />
        </S.Container>
      </BaseLayout>
    );
  }
