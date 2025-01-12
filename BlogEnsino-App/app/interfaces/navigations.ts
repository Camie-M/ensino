interface RootStackParamList  {
    Home:undefined;
    Admin: undefined;
    CreatePost:undefined;
    UpdatePost: { postId: string };
    Gestao: undefined;
    Login: undefined;
    [key: string]: undefined | { postId: string };
};

export default RootStackParamList;