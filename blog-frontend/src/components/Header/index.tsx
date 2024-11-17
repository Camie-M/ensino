import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';

import ToggleTheme from '../ToggleTheme'

import * as S from './styled'

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  return (
    <S.Header>
      <p>Your name</p>
      <nav id="desktop-menu">
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

      {/* Mobile */}
      <Image
        src={`/black_menu.svg`}
        alt={"Abrir menu"}
        width="24"
        height="24"
        id="mobile-btn"
        onClick={() => setOpenMobileMenu(true)}
      />
      {openMobileMenu && (
        <nav id="mobile-menu">
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
          <Image
            src={`/close_icon.svg`}
            alt={"Fechar menu"}
            width="24"
            height="24"
            onClick={() => setOpenMobileMenu(false)}
          />
        </nav>
      )}
    </S.Header>
  )
}

export default Header

