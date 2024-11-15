import React from 'react'
import Image from 'next/image'

import * as S from './styled'

const ToggleTheme = () => {
  return (
    <S.ToggleTheme>
      <Image src={`/sun.svg`} alt={"Mudar tema"} width="24" height="24" />
      <div id="toggle-switch" />
    </S.ToggleTheme>
  )
}

export default ToggleTheme
