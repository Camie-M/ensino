import React, { useEffect, useState } from 'react'
import type { FunctionComponent } from "react";
import { Inter } from 'next/font/google'

import Header from '../Header';
import Footer from '../Footer';

import * as S from './styled'
import Hero from '../Hero';
import Restricted from '../Restricted';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  children: React.ReactNode;
  banner: boolean;
  toggleTheme: () => void; // Adicione a prop toggleTheme
}

const BaseLayout: FunctionComponent<Props> = ({ children, banner, toggleTheme }) => {
  const [hero, setHero] = useState(banner)

  useEffect(() => {
    setHero(banner)
  }, [banner])

  return (
    <Restricted>
      <S.BaseLayout className={inter.className}>
        <Header toggleTheme={toggleTheme} />
        <Hero banner={hero} />
        {children}
        <Footer />
      </S.BaseLayout>
    </Restricted>
  )
}

export default BaseLayout;
