import React, { useState } from 'react';
import Image from 'next/image';

import * as S from './styled';

interface ToggleProps {
  $isactive?: boolean;
}

const ToggleTheme: React.FC<ToggleProps> = ({ $isactive }) => {
  const [isActive, setIsActive] = useState($isactive || false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <S.ToggleTheme onClick={handleToggle}>
      <Image src={`/sun.svg`} alt={"Mudar tema"} width="24" height="24" />
      <Image src={`/sun.svg`} alt={"Mudar tema"} width="24" height="24" />
      <S.ToggleButton $isactive={isActive} />
    </S.ToggleTheme>
  );
};

export default ToggleTheme;
