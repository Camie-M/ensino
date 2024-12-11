import React from 'react'

import * as S from './styled'

interface HeroProps {
  banner: boolean;
}
const Hero: React.FC<HeroProps> = ({ banner }) => {
  return (
    banner ? (
      <S.Hero>
        <S.Title>
          BLOG ENSINO
        </S.Title>
      </S.Hero>
    ) : null
  );
};


export default Hero
