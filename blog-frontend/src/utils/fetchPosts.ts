export const PostFetch = async (): Promise<PostDataProp[] | null> => {
    try {
        const postResponse = await fetch('http://localhost:3001/posts/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
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

export const PostFetchById = async (id: string): Promise<PostDataProp | undefined> => {
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


export const generateImageUrl = async (image: any) => {
    try {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlmZTYyOGUzLThjOGEtNGU4NS05MGRkLWRlZTdmZWY1ZmFhYiIsInVzZXJuYW1lIjoiQnJlbm8iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzMxOTg5NDAsImV4cCI6MTczMzI4NTM0MH0.r17bTXeVLYBvSbN2L0yvvFKLMLL9Ykz4jc5WBTJt3-8";

        // Supondo que `image` seja um arquivo (File)
        const formData = new FormData();
        formData.append("image", image); // Adiciona o arquivo ao FormData

        const response = await fetch(`http://localhost:3001/imageGeneration/`, {
            method: 'POST',
            headers: {
                authorization: `${token}`, // Correto uso do Bearer token
            },
            body: formData, // Envia o FormData com o arquivo
        });

        // if (!response.ok) {
        //     throw new Error("Erro ao gerar imagem.");
        // }

        return await response.json();


    } catch (error) {
        console.error("Erro:", error);
    }

};
// // Usando type para a interface
export type PostDataProp = {
    id: string;
    createdAt: string;
    title: string;
    text: string;
    author: string;
    image: string;
};
