const PostFetch = async (): Promise<PostDataProp[] | null> => {
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
        console.log('Posts recebidos:', postsData); // Log para depuração
        return postsData;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        alert('Ocorreu um erro inesperado. Tente novamente.');
        return null;
    }
};

// Usando type para a interface
export type PostDataProp = {
    id: string;
    createdAt: string;
    title: string;
    text: string;
    author: string;
    image: string;
}

export default PostFetch;
