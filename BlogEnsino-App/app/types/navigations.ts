export interface RootStackParamList {
    Home: undefined;
    Admin: undefined;
    CreatePost: undefined;
    Gestao: undefined;
    Login: undefined;
    PostDetails: { postId: string };
    UpdatePost: { postId: string };
    [key: string]: undefined | { postId: string };
  }
  
  export default RootStackParamList;
  