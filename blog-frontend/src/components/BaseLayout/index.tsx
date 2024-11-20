import React from 'react'
import type { FunctionComponent } from "react";
import { Inter } from 'next/font/google'

import Header from '../Header';
import Hero from '../Hero';
import Footer from '../Footer';

import * as S from './styled'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  children: React.ReactNode;
  showHero?: boolean
}

const BaseLayout: FunctionComponent<Props> = ({ children, showHero = true }) => {
  return (
    <S.BaseLayout className={inter.className}>
      <Header />
      {showHero && <Hero />}
      {children}
      <Footer />
    </S.BaseLayout>
  )
}

export default BaseLayout
