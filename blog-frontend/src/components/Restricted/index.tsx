import React, { useContext, useEffect } from 'react';
import type { FunctionComponent } from "react";
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';

type Props = {
    children: React.ReactNode;
}

const Restricted: FunctionComponent<Props> = ({ children }) => {
  const { isAuthorized } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthorized) {
      router.push('/login');
    }
  }, [isAuthorized, router]);

  return (
    <div>
      {isAuthorized ? children : null}
    </div>
  );
}

export default Restricted;
