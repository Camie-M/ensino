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

// // Usando type para a interface
 export type PostDataProp = {
     id: string;
     createdAt: string;
     title: string;
     text: string;
     author: string;
     image: string;
 };
