import  { UserDataProp, UserInfoProp, UserLogOut }  from '@/app/types/users';
import { TokenGenerator } from '../Auth/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from "expo-constants";

const localHost = Constants.expoConfig?.extra?.LOCALHOST;

export const formatFormData = async (formData: UserInfoProp) => {
    try {
      const formUser = {
        username: formData.username,
        role: formData.role
      }
      const form = new FormData();
      if (!formData.role || !formData.username) {
          return null
      }
      form.append('username', formData.username);
      form.append('role', formData.role);

      console.log("form",formUser);
      
      return formUser;
    } catch (error) {
        console.error('Erro ao tentar formatar os campos do formulario', error);
    }
};


export const errorHandler = async (response: Response) => {
    try {
      if (!response.ok) {
        const errorMessage = `Erro ao atualizar usuário. Status: ${response.status} - ${response.statusText}`;
        console.error(errorMessage);
        if (response.status === 400) {
          console.error('Detalhes: Requisição inválida. Verifique os dados enviados.');
        } else if (response.status === 401) {
          console.error('Detalhes: Não autorizado. Verifique suas credenciais.');
        } else if (response.status === 404) {
          console.error('Detalhes: User não encontrado.');
        } else if (response.status >= 500) {
          console.error('Detalhes: Erro no servidor. Tente novamente mais tarde.');
        }
        return null;
      }
    } catch (error) {
        console.error('Erro ao tentar formatar os campos do formulario', error);
    }
};

export const LoginUser = async (UserFormData: UserDataProp): Promise<UserDataProp | null> => {
    try {
       
        const token = await TokenGenerator(UserFormData);
        if (!token) {
            console.error("Token não gerado.");
            return null;
        }
        await AsyncStorage.setItem('userToken', token);
        const userResponse = await fetch(`${localHost}:3001/users/self`, {
        method: "GET",
        headers: {
            'Authorization': token,
          },
        });
       if (!userResponse.ok) {
            console.error('Erro ao buscar Usuario 1:', userResponse.status, userResponse.statusText);
            return null;
        }

        const userData: UserDataProp = await userResponse.json();
        return userData;
    } catch (error) {
        console.error('Erro ao buscar Usuario 2:', error);
        return null;
    }
};

export const getOwnUserData = async (): Promise<UserLogOut | null> => {
  try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        return null;
      }
      const userResponse = await fetch(`${localHost}:3001/users/self`, {
      method: "GET",
      headers: {
          'Authorization': token,
        },
      });
      if (!userResponse.ok) {
          console.error('Erro ao buscar Usuario 3:', userResponse.status, userResponse.statusText);
          return null;
      }
      const userData: UserLogOut = await userResponse.json();      
      return userData;
  } catch (error) {
      console.error('Erro ao buscar Usuario 4:', error);
      return null;
  }
};

export const getAllUsers = async (): Promise<UserInfoProp[] | null> => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      
      if (!token) {
        return null;
      }
        const usersResponse = await fetch(`${localHost}:3001/users`, {
            method: "GET",
            headers: {
              'Authorization': `${token}`,
            },
        });
        
        if (!usersResponse.ok) {
            console.error('Erro ao buscar users:', usersResponse.status, usersResponse.statusText);
            return null;
        }
         
        const usersData: UserInfoProp[] = await usersResponse.json();
        
        return usersData;
        
    } catch (error) {
        console.error('Erro ao buscar users:', error);
        return null;
    }
};

export const createUser = async (formData: UserInfoProp): Promise<UserInfoProp | null> => {
try {
    const token = await AsyncStorage.getItem('userToken');
    const formatedFormData = JSON.stringify(formData);
  
    const response = await fetch(`${localHost}:3001/users`, {
    method: "POST",
    headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json', // Adicione essa linha
    },
    body: formatedFormData,
    });
    
    const userData: UserInfoProp = await response.json();

    return userData;
} catch (error) {
    if (error instanceof TypeError) {
    console.error('Erro de conexão: Verifique sua conexão com a internet ou o servidor.', error.message);
    } else {
    console.error('Erro inesperado ao atualizar post:', error);
    }
    return null;
}
};

export const getUserById = async (id: string): Promise<UserInfoProp | null> => {
    try {
        const token = await AsyncStorage.getItem('userToken');
        if (!token) {
          return null;
        }
        const userResponse = await fetch(`${localHost}:3001/users/${id}`, {
            method: "GET",
            headers: {
              'Authorization': `${token}`,
          },
        });
  
        if (!userResponse.ok) {
            console.error('Erro ao buscar user:', userResponse.status, userResponse.statusText);
            return null;
        }
  
        const userData: UserInfoProp = await userResponse.json();
        
        return userData;
    } catch (error) {
        console.error('Erro ao buscar user:', error);
        return null;
    }
};

export const updateUserbyId = async (id: string, formData: UserInfoProp): Promise<UserInfoProp | null> => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const formatedFormData = JSON.stringify(formData);
    if(!token) return null;
    
    const response = await fetch(`${localHost}:3001/users/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',
      },
      body: formatedFormData,
    });

    const userData: UserInfoProp = await response.json();


    return userData;
  } catch (error) {
    // Tratamento de erros inesperados
    if (error instanceof TypeError) {
      console.error('Erro de conexão: Verifique sua conexão com a internet ou o servidor.', error.message);
    } else {
      console.error('Erro inesperado ao atualizar user:', error);
    }
    return null;
  }
};

export const deleteUser = async (id: string): Promise<UserInfoProp | null> => {
  try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token || !id) {
          return null;
      }

      const loggedUser = await getOwnUserData();
      if (!loggedUser) {
          console.error("Erro ao obter usuário logado.");
          return null;
      }

      // Impede a exclusão do próprio usuário
      if (loggedUser.id === id) {
          console.error("Usuário não pode excluir a própria conta.");
          return null;
      }

      const response = await fetch(`${localHost}:3001/users/${id}`, {
          method: "DELETE",
          headers: {
              'Authorization': `${token}`,
          },
      });

      errorHandler(response);

      const userData: UserInfoProp = await response.json();
      console.log('User deletado com sucesso:', userData);

      return userData;
  } catch (error) {
      if (error instanceof TypeError) {
          console.error('Erro de conexão: Verifique sua conexão com a internet ou o servidor.', error.message);
      } else {
          console.error('Erro inesperado ao deletar usuário:', error);
      }
      return null;
  }
};


export default {formatFormData,errorHandler,LoginUser,getAllUsers,createUser,getUserById,updateUserbyId,deleteUser}