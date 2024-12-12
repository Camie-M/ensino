import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ToggleTheme from '../ToggleTheme';
import * as S from './styled';
import { getUserByToken, UserDataProps } from '@/utils/fetchUsers';

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [user, setUser] = useState<UserDataProps | null>(null);
  const [loading, setLoading] = useState(true);
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setUser(null);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openMobileMenu]);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userData = await getUserByToken(token);
        if (userData) {
          setUser(userData);
        }
      }
      setLoading(false); // Finaliza o estado de carregamento
    };
    fetchUser();
  }, []);

  return (
    <S.Header>
      <p>{loading ? 'Carregando...' : user ? `Bem-vindo, ${user.username}` : 'Seu nome'}</p>
      <nav id="desktop-menu">
        <ol>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/login" onClick={handleLogout}>Logout</Link>
          </li>
          {user?.role === 'admin' && (
            <li>
              <Link href="/admin">Admin</Link>
            </li>
          )}
        </ol>
        <ToggleTheme />
      </nav>

      {/* Mobile */}
      <Image
        src="/black_menu.svg"
        alt="Abrir menu"
        width={24}
        height={24}
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
              <Link href="/login" onClick={handleLogout}>Logout</Link>
            </li>
            {user?.role === 'admin' && (
              <li>
                <Link href="/admin">Admin</Link>
              </li>
            )}
          </ol>
          <ToggleTheme />
          <Image
            src="/close_icon.svg"
            alt="Fechar menu"
            width={24}
            height={24}
            onClick={() => setOpenMobileMenu(false)}
          />
        </nav>
      )}
    </S.Header>
  );
};

export default Header;
