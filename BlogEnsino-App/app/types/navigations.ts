export interface RootStackParamList {
    Home: undefined;
    Admin: undefined;
    CreatePost: undefined;
    Gestao: undefined;
    CreateUser: undefined;
    Login: undefined;
    PostDetails: { postId: string };
    UpdatePost: { postId: string };
    UpdateUser: { userId: string };
    DeleteUser: { userId: string };
    [key: string]: undefined | { postId: string } | { userId: string };
  }
  
  export default RootStackParamList;
  