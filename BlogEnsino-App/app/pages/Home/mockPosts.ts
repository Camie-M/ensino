export interface PostData {
    id: string;
    title: string;
    text: string;
    author: string;
    image_url: string;
    created_at: string;
  }
  
  const mockPosts: PostData[] = [
    {
      id: "1",
      title: "JavaScript: O guia essencial para iniciantes",
      text: "JavaScript é uma das linguagens de programação mais populares do mundo...",
      author: "Breno",
      image_url: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
      created_at: "2025-01-01T10:00:00Z",
    },
    {
      id: "2",
      title: "A importância do Design Responsivo",
      text: "O design responsivo é um dos pilares do desenvolvimento moderno de websites...",
      author: "Breno",
      image_url: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_960_720.jpg",
      created_at: "2025-01-02T12:00:00Z",
    },
    {
      id: "3",
      title: "Os fundamentos do HTML5",
      text: "HTML5 é a mais recente evolução do HyperText Markup Language...",
      author: "Breno",
      image_url: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_960_720.jpg",
      created_at: "2025-01-03T14:00:00Z",
    },
    {
      id: "4",
      title: "A revolução do CSS3",
      text: "CSS3 trouxe uma revolução no design de interfaces web...",
      author: "Breno",
      image_url: "https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg",
      created_at: "2025-01-04T16:00:00Z",
    },
    {
      id: "5",
      title: "Os benefícios do TypeScript no desenvolvimento front-end",
      text: "TypeScript é uma extensão do JavaScript que adiciona tipagem estática...",
      author: "Breno",
      image_url: "https://cdn.pixabay.com/photo/2015/01/08/18/24/programming-593312_960_720.jpg",
      created_at: "2025-01-05T18:00:00Z",
    },
    {
      id: "6",
      title: "Introdução ao Node.js e suas aplicações",
      text: "Node.js é um runtime de JavaScript construído sobre o motor V8 do Google Chrome...",
      author: "Valdir",
      image_url: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849824_960_720.jpg",
      created_at: "2025-01-06T20:00:00Z",
    },
  ];
  
  export default mockPosts;
  