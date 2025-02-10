import { UserDataProp } from "@/app/types/users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";

const localHost = Constants.expoConfig?.extra?.LOCALHOST;


export const TokenGenerator = async (data: UserDataProp): Promise<string | null> => {
    try {
      const usernamePassword = `${btoa(`${data.email}:${data.senha}`)}`;
      const response = await fetch(`${localHost}:3001/auth/token`, {
        method: 'POST',
        headers: {
          'Authorization': usernamePassword,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorMessage = `Erro ${response.status}: ${response.statusText}`;
        throw new Error(errorMessage);
      }
  
      const responseData = await response.json();
      
      return responseData.token; // Retorna o token obtido
    } catch (error) {
      console.error('Erro ao buscar o token:', error);
      return null; 
    }
};



export default {TokenGenerator}