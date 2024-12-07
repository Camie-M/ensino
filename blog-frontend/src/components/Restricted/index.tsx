import React, { useContext } from 'react'
import type { FunctionComponent } from "react";
import { useRouter } from 'next/navigation'
import { UserContext } from '@/context/UserContext';

type Props = {
    children: React.ReactNode;
}

const Restricted: FunctionComponent<Props> = ({ children }) => {
  const user = useContext(UserContext);
  const router = useRouter()
  return (
    <div>
      {user ? (
        <>
            {router.push('/login')}
        </>
      ) : (
        <>
            {children}
        </>
      )}
    </div>
  )
}

export default Restricted
