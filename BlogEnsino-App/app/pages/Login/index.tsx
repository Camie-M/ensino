
import BaseLayout from '@/app/components/BaseLayout';
import { UserFormData } from "@/app/components/FormUser";
import FormUser from "@/app/components/FormUser";
import { LoginUser } from '@/app/Services/Users/api';
import RootStackParamList from '@/app/types/navigations';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from 'expo-router';

export default function Login() { 
   const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
   const handleSave = async (formData: UserFormData) => {
    const userData = await LoginUser(formData);
    if (userData) {
        navigation.navigate('Home');
    } else {
        console.error('Erro no login, usuário não autenticado');
    }
};
  return (
    <BaseLayout>
      <FormUser onSubmit={handleSave} />
    </BaseLayout>
  );
}
