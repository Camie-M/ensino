import { FieldValues } from 'react-hook-form';
export const getAllPosts = async (): Promise<PostDataProp[] | null> => {
  try {
    const postResponse = await fetch("http://localhost:3001/posts/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    // Verificando se a resposta é OK
    if (!postResponse.ok) {
      console.error('Erro ao buscar posts:', postResponse.status, postResponse.statusText);
      alert('Posts não encontrados ou credenciais inválidas.');
      return null;
    }

    const postsData: PostDataProp[] = await postResponse.json();
    return postsData;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return null;
  }
};

export const getPostById = async (id: string): Promise<PostDataProp | undefined> => {
  try {
    const postResponse = await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    // Verificando se a resposta é OK
    if (!postResponse.ok) {
      console.error('Erro ao buscar post:', postResponse.status, postResponse.statusText);
      alert('Post não encontrado ou credenciais inválidas.');
      return undefined;
    }

    const postData: PostDataProp = await postResponse.json();
    return postData;
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return undefined;
  }
};

export const DeletePost = async (id:string, token:string):Promise<void> => {
  try {
    const postResponse = await fetch(`http://localhost:3001/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': token, //mudar pelo token que estiver no header
      },
    });

    // Verificando se a resposta é OK
    if (!postResponse.ok) {
      console.error('Erro ao delete o Post:', postResponse.status, postResponse.statusText);
      alert('Post não encontrado ou credenciais inválidas');
    }else{
      alert('Post Deletado com sucesso');
    }
  } catch (error) {
    console.error('Erro ao buscar post:', error);

  }
};

export const TokenGenerator = async (data: FieldValues): Promise<string | null> => {
  try {
    const usernamePassword = `${btoa(`${data.usuario}:${data.senha}`)}`;
    
    const response = await fetch(`http://localhost:3001/auth/token`, {
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
    return null;  // Retorna null em caso de erro
  }
};

export type PostDataProp = {
  id: string;
  title: string;
  text: string;
  author: string;
  image: string;
  createdAt: string;
};
