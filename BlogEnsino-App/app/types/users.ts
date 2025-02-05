interface UserDataProp {
    email?: string;
    senha?: string;
};

interface UserLogOut {
    username?: string;
    role?: string;
    createdAt?:string;
};

interface UserInfoProp {
    id?: number;
    name: string;
    type?: string;
    email: string;
}; 

export { UserDataProp, UserInfoProp,UserLogOut };