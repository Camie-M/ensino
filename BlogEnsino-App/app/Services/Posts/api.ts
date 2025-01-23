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
    const token = await getToken();
    if (!token) {
      console.error('Token não encontrado');
      return null;
    }

    const form = new FormData();
    form.append('title', formData.title);
    form.append('text', formData.text);
    if (formData.image) {
      form.append('image', {
        uri: formData.image,
        name: 'image.jpg',
        type: 'image/jpeg',
      } as any);
    }
    
    const postResponse = await fetch(`http://192.168.15.18:3001/posts/${id}`, {
      method: "PUT",
      headers: {
        'Authorization': `${token}`,
      },
      body:form,
    });
    console.log("postResponse", postResponse);
    
    if (!postResponse.ok) {
      console.error('Erro ao atualizar post:', postResponse.status, postResponse.statusText);
      return null;
    }

    const postData: PostDataProp = await postResponse.json();
    console.log("postData", postData);
    
    return postData;
  } catch (error) {
    console.error('Erro ao atualizar post:', error);
    return null;
  }
};


export const getToken = async () => {
    try {
        // let token = await AsyncStorage.getItem('token');
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmZjZjMzMzLTlkMjMtNDY5Ni1iMTFmLWU2Y2QyZDQ3Y2UzMCIsInVzZXJuYW1lIjoiQ2FtaWxhIiwicm9sZSI6InByb2Zlc3NvciIsImlhdCI6MTczNzU5MjE0MywiZXhwIjoxNzM3Njc4NTQzfQ.421L_dIusVGQc3DZIbFiY9OSN_5fnN032pz9rL_e8No"
        return token;
    } catch (error) {
        console.error('Erro ao tentar recuperar o token', error);
    }
};
  
export default {getAllPosts, getPostById, updatePostbyId};
