// context/UserContext.tsx
import React, { createContext, useState, useEffect } from 'react';
import type { FunctionComponent } from "react";

type Props = {
    children: React.ReactNode;
}

type User = {
    userID: string;
    changeUserId: (id: string) => void;
    isAuthorized: boolean;
    changeIsAuthorized: (isAuth: boolean) => void;
};

const defaultUser = {
    userID: '',
    changeUserId: () => '',
    isAuthorized: false,
    changeIsAuthorized: () => ''
};

export const UserContext = createContext<User>(defaultUser);

export const UserProvider: FunctionComponent<Props> = ({ children }) => {
    const [userID, setUserID] = useState<string>(defaultUser.userID);
    const [isAuthorized, setIsAuthorized] = useState<boolean>(defaultUser.isAuthorized);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthorized(true);
        }
    }, []);

    const changeUserId = (id: string) => {
        setUserID(id);
    };

    const changeIsAuthorized = (newState: boolean) => {
        setIsAuthorized(newState);
    };

    return (
        <UserContext.Provider value={{ userID, changeUserId, isAuthorized, changeIsAuthorized }}>
            {children}
        </UserContext.Provider>
    );
};
