import PostDataProp from "@/app/types/post";

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

export const updatePost = async (id: string, formData: PostDataProp): Promise<PostDataProp | null> => {
    try {
        const token = localStorage.getItem("token");
        const postResponse = await fetch(`http://192.168.15.18:3001/posts/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `${token}`,
            },
            body: JSON.stringify(formData)
        });
  
        if (!postResponse.ok) {
            console.error('Erro ao atualizar post:', postResponse.status, postResponse.statusText);
            return null;
        }
  
        const postData: PostDataProp = await postResponse.json();
        return postData;
    } catch (error) {
        console.error('Erro ao atualizar post:', error);
        return null;
    }
};

export default getAllPosts;
