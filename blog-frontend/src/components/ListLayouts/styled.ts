import styled from 'styled-components';

interface PaginationProps {
  size?: string;
  pagination?: boolean;
}

export const Container = styled.div<PaginationProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr)); /* Colunas flexíveis */
  gap: 1rem;

  /* Quando a tela for maior que 1024px (telas grandes) */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr)); /* Colunas menores em telas médias */
  }

  /* Quando a tela for menor que 600px (telas pequenas) */
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(60%, 1fr)); /* Apenas uma coluna em telas muito pequenas */
  }
`;
