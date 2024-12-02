'use client'
import React, { createContext, useState } from 'react';
import type { FunctionComponent } from "react";

type Props = {
    children: React.ReactNode;
}

const defaultUser = {
    userID: 'asdfasdf-asdf-asdf-asdf-asdfasdfasdf',
    name: 'Teste 1'
}

export const UserContext = createContext<unknown>(defaultUser);

export const UserProvider: FunctionComponent<Props> = ({ children }) => {
    const [userID, setUserID] = useState(defaultUser);

    return (
        <UserContext.Provider value={{ userID, setUserID }}>
            {children}
        </UserContext.Provider>
    )
};
