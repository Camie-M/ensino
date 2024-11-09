// pages/index.tsx
import styled, { ThemeContext } from 'styled-components';
import React, { useContext } from 'react';

interface Props {
  toggleTheme(): void
}

export const Button = styled.button`
  height:4rem;
  width:8rem;
  background-color:${props => props.theme.colors.titles};
  :hover{
    cursor: pointer;
  }
`

const HomePage: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <div>
        <h1>The blog</h1>
        <h2>The blog</h2>
        <h3>The blog</h3>
        <p>The blog</p>
        <Button onClick={toggleTheme} />
      </div >
    </>
  );
};

export default HomePage;
