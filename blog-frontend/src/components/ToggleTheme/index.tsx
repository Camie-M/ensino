import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import * as S from './styled';

interface ToggleProps {
  isActive?: boolean;
}

const ToggleTheme: React.FC<ToggleProps> = ({ isActive: initialIsActive }) => {
  const [isActive, setIsActive] = useState(initialIsActive || false);

  useEffect(() => {
    setIsActive(initialIsActive || false);
  }, [initialIsActive]);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <S.ToggleTheme onClick={handleToggle}>
      <Image src={`/sun.svg`} alt={"Mudar tema"} width="24" height="24" />
      <Image src={`/sun.svg`} alt={"Mudar tema"} width="24" height="24" />
      <S.ToggleButton isActive={isActive} />
    </S.ToggleTheme>
  );
};

export default ToggleTheme;
