// components/Restricted.tsx
import React, { useContext, useEffect, useState } from 'react';
import type { FunctionComponent } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';

type Props = {
    children: React.ReactNode;
}

const Restricted: FunctionComponent<Props> = ({ children }) => {
    const { isAuthorized } = useContext(UserContext);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isAuthorized && !localStorage.getItem('token')) {
            router.push('/login');
        } else {
            setLoading(false);
        }
    }, [isAuthorized, router]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return <>{isAuthorized ? children : null}</>;
};

export default Restricted;
