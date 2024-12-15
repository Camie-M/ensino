import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaTimes,FaBars } from "react-icons/fa"; 
import ToggleTheme from '../ToggleTheme'; // Mantendo o componente ToggleTheme
import * as S from './styled';
import { getUserByToken, UserDataProps } from '@/utils/fetchUsers';

type HeaderProps = {
  toggleTheme: () => void; // Tipando a prop toggleTheme
};

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
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
      setLoading(false);
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
        {/* Usando a função toggleTheme dentro do Header */}
        <ToggleTheme toggleTheme={toggleTheme} />
      </nav>

      {/* Mobile */}
      <FaBars
          size={24} // Define o tamanho do ícone
          onClick={() => setOpenMobileMenu(true)} // Atribui a função ao clique
          style={{ cursor: "pointer" }} // Adiciona estilos opcionais
          id="mobile-btn" // Mantém o ID original para consistência
          aria-label="Abrir menu" // Adiciona acessibilidade
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
          {/* Usando a função toggleTheme dentro do mobile menu também */}
          <ToggleTheme toggleTheme={toggleTheme} />
          <FaTimes
              size={24} // Define o tamanho do ícone
              onClick={() => setOpenMobileMenu(false)} // Atribui a função ao clique
              style={{ cursor: "pointer" }} // Adiciona estilos opcionais
              aria-label="Fechar menu" // Adiciona acessibilidade
            />
        </nav>
      )}
    </S.Header>
  );
};

export default Header;
