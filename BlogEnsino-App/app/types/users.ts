interface UserDataProp {
    email?: string;
    senha?: string;
};

interface UserInfoProp {
    id?: number;
    name: string;
    type?: string;
    email: string;
}; 

export { UserDataProp, UserInfoProp };