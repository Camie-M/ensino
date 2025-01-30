import  UserDataProps  from '@/app/types/users';
import { TokenGenerator } from '../Auth/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LoginUser = async (UserFormData: UserDataProps): Promise<UserDataProps | null> => {
    try {
        
        const token = await TokenGenerator(UserFormData);
        if (!token) {
            console.error("Token não gerado.");
            return null;
        }
        await AsyncStorage.setItem('userToken', token);
        const userResponse = await fetch("http://192.168.15.18:3001/users/self", {
        method: "GET",
        headers: {
            'Authorization': token,
          },
        });
       if (!userResponse.ok) {
            console.error('Erro ao buscar Usuario:', userResponse.status, userResponse.statusText);
            return null;
        }

        const userData: UserDataProps = await userResponse.json();
        return userData;
    } catch (error) {
        console.error('Erro ao buscar Usuario:', error);
        return null;
    }
};

