export const getAllPosts = async (): Promise<any[] | null> => {
  try {
      const postResponse = await fetch('http://192.168.15.18:3001/posts', {
          method: "GET",
          headers: { "Content-Type": "application/json" },
      });

      if (!postResponse.ok) {
          console.error('Erro ao buscar posts:', postResponse.status, postResponse.statusText);
          return null;
      }

      const postsData: any[] = await postResponse.json();
      return postsData;
  } catch (error) {
      console.error('Erro ao buscar posts:', error || error);
      return null;
  }
};

export default getAllPosts;
