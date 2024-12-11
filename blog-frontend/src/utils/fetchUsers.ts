export const getUserByToken = async (token:string): Promise<UserDataProps| null> => {
    try {
        const userResponse = await fetch("http://localhost:3001/users/self", {
        method: "GET",
        headers: {
            'Authorization': token,
          },
        });

        if (!userResponse.ok) {
        console.error('Erro ao buscar posts:', userResponse.status, userResponse.statusText);
        alert('Posts não encontrados ou credenciais inválidas.');
        return null;
        }

        const postsData: UserDataProps = await userResponse.json();
        return postsData;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return null;
    }
};


export type UserDataProps = {
    createdAt:string
    id:string
    role:string
    updatedAt:string
    username:string

};