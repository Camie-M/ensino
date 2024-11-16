import React from 'react'

import * as S from './styled'
import Link from 'next/link'
import ToggleTheme from '../ToggleTheme'

const Header = () => {
  return (
    <S.Header>
      <p>Your name</p>
      <nav>
        <ol>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ol>
        <ToggleTheme />
      </nav>
    </S.Header>
  )
}

export default Header

