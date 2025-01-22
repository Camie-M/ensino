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
    const token = await getToken();  // Certifique-se de aguardar a função getToken
    if (!token) {
      console.error('Token não encontrado');
      return null;
    }
    // console.log(formData);
    
    const postResponse = await fetch(`http://192.168.15.18:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `${token}`,
        'Content-Type': 'application/json',  // Adicione o cabeçalho Content-Type
      },
      body: JSON.stringify(formData),  // Certifique-se de converter o formData para uma string JSON
    });

    if (!postResponse.ok) {
      console.error('Erro ao atualizar post:', postResponse.status, postResponse.statusText);
      return null;
    }

    const postData: PostDataProp = await postResponse.json();
    // console.log(postData);
    
    return postData;
  } catch (error) {
    console.error('Erro ao atualizar post:', error);
    return null;
  }
};


export const getToken = async () => {
    try {
        // let token = await AsyncStorage.getItem('token');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImI2MTJiOWJiLTA5YzUtNDljMS1iMzgxLTgwYjE3ODcyN2U2MCIsInVzZXJuYW1lIjoiQ2FtaWxhIiwicm9sZSI6InByb2Zlc3NvciIsImlhdCI6MTczNzUwNjgwOSwiZXhwIjoxNzM3NTkzMjA5fQ.pXx_JTIGlp55E20WO3t4dIwcRTTTBN1DMgv57qyyhM4"
        return token;
    } catch (error) {
        console.error('Erro ao tentar recuperar o token', error);
    }
};
  
export default {getAllPosts, getPostById, updatePostbyId};
