interface UserDataProp {
    email?: string;
    senha?: string;
};

interface UserLogOut {
    id?:string;
    username?: string;
    role?: string;
    createdAt?:string;
};

interface UserInfoProp {
    id?: string;
    username: string;
    role: string;
}; 

export { UserDataProp, UserInfoProp,UserLogOut };