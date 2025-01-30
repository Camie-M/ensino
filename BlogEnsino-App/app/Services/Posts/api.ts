import PostDataProp from "@/app/types/post";
import AsyncStorage from '@react-native-async-storage/async-storage';


export const getAllPosts = async (): Promise<PostDataProp[] | null> => {
    try {
        const postResponse = await fetch('http://192.168.15.18:3001/posts', {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
  
        if (!postResponse.ok) {
            console.error('Erro ao buscar posts:', postResponse.status, postResponse.statusText);
            return null;
        }
  
        const postsData: PostDataProp[] = await postResponse.json();
        return postsData;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return null;
    }
  };

export const getPostById = async (id: string): Promise<PostDataProp | null> => {
    try {
        const postResponse = await fetch(`http://192.168.15.18:3001/posts/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
  
        if (!postResponse.ok) {
            console.error('Erro ao buscar post:', postResponse.status, postResponse.statusText);
            return null;
        }
  
        const postData: PostDataProp = await postResponse.json();
        console.log(postData);
        
        return postData;
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        return null;
    }
};

export const updatePostbyId = async (id: string, formData: PostDataProp): Promise<PostDataProp | null> => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const formatedFormData = await formatFormData(formData)
    const response = await fetch(`http://192.168.15.18:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `${token}`,
      },
      body: formatedFormData,
    });
    errorHandler(response)

    const postData: PostDataProp = await response.json();
    console.log('Post atualizado com sucesso:', postData);

    return postData;
  } catch (error) {
    // Tratamento de erros inesperados
    if (error instanceof TypeError) {
      console.error('Erro de conexão: Verifique sua conexão com a internet ou o servidor.', error.message);
    } else {
      console.error('Erro inesperado ao atualizar post:', error);
    }
    return null;
  }
};
export const createPost = async (formData: PostDataProp): Promise<PostDataProp | null> => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const formatedFormData = await formatFormData(formData)

    const response = await fetch(`http://192.168.15.18:3001/posts`, {
      method: "POST",
      headers: {
        'Authorization': `${token}`,
      },
      body: formatedFormData,
    });
    
    errorHandler(response)
    

    const postData: PostDataProp = await response.json();
    console.log('Post atualizado com sucesso:', postData);

    return postData;
  } catch (error) {
    // Tratamento de erros inesperados
    if (error instanceof TypeError) {
      console.error('Erro de conexão: Verifique sua conexão com a internet ou o servidor.', error.message);
    } else {
      console.error('Erro inesperado ao atualizar post:', error);
    }
    return null;
  }
};


export const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('userToken')
        return token;
    } catch (error) {
        console.error('Erro ao tentar recuperar o token', error);
    }
};
export const formatFormData = async (formData: PostDataProp) => {
    try {
      const form = new FormData();
      form.append('title', formData.title);
      form.append('text', formData.text);
      if (formData.image_url) {
        form.append('image', {
          uri: formData.image_url,
          name: 'image.jpg',
          type: 'image/jpeg',
        } as any);
      }
      return form;
    } catch (error) {
        console.error('Erro ao tentar formatar os campos do formulario', error);
    }
};
export const errorHandler = async (response: Response) => {
    try {
      if (!response.ok) {
        const errorMessage = `Erro ao atualizar post. Status: ${response.status} - ${response.statusText}`;
        console.error(errorMessage);
        if (response.status === 400) {
          console.error('Detalhes: Requisição inválida. Verifique os dados enviados.');
        } else if (response.status === 401) {
          console.error('Detalhes: Não autorizado. Verifique suas credenciais.');
        } else if (response.status === 404) {
          console.error('Detalhes: Post não encontrado.');
        } else if (response.status >= 500) {
          console.error('Detalhes: Erro no servidor. Tente novamente mais tarde.');
        }
        return null;
      }
    } catch (error) {
        console.error('Erro ao tentar formatar os campos do formulario', error);
    }
};
  
export default {getAllPosts, getPostById, updatePostbyId};
