import React from 'react'
import type { FunctionComponent } from "react";
import { Inter } from 'next/font/google'

import Header from '../Header';
import Footer from '../Footer';

import * as S from './styled'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

type Props = {
  children: React.ReactNode;
}

const BaseLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <S.BaseLayout className={inter.className}>
      <Header />
      {children}
      <Footer />
    </S.BaseLayout>
  )
}

export default BaseLayout
