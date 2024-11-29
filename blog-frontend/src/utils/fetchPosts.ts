const PostFetch = async () => {
    try {
        const postResponse = await fetch('http://localhost:3001/posts/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        if (!postResponse.ok) {
            alert('Posts não encontrados ou credenciais inválidas.');
            return;
        }
        const postsData = await postResponse.json();
        return postsData
        // console.log(postsData);
        // setPosts(postsData);
    } catch (error) {
        alert('Ocorreu um erro inesperado. Tente novamente.');
        console.log(error);
    }
};

export default PostFetch;