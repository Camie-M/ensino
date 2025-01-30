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
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      author: "Breno",
      image_url: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
      created_at: "2025-01-01T10:00:00Z",
    },
    {
      id: "2",
      title: "A importância do Design Responsivo",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
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
  