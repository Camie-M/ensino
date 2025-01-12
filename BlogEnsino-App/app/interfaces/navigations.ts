interface RootStackParamList  {
    Home:undefined;
    Admin: undefined;
    CreatePost:undefined;
    Gestao: undefined;
    Login: undefined;
    [key: string]: undefined | { postId: string };
};

export default RootStackParamList;