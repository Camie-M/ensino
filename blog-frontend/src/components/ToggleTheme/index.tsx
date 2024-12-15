import React, { useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa"; //
import * as S from './styled';

interface ToggleProps {
  $isactive?: boolean;
  toggleTheme: () => void;
}

const ToggleTheme: React.FC<ToggleProps> = ({ toggleTheme ,$isactive }) => {
  const [isActive, setIsActive] = useState($isactive || false);

  const handleToggle = () => {
    setIsActive(!isActive);
    toggleTheme()
  };

  return (
    <S.ToggleTheme onClick={handleToggle}>
      <S.IconWrapper>
        <FaMoon size={24} title="Ativar tema escuro" />
        <FaSun size={24} title="Ativar tema claro" />
      </S.IconWrapper>
      <S.ToggleButton $isactive={isActive} />
    </S.ToggleTheme>
  );
};

export default ToggleTheme;
