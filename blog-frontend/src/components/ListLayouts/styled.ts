import styled from 'styled-components';

interface PaginationProps {
  size?: string;
  pagination?: boolean;
}

export const Container = styled.div<PaginationProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Ajusta dinamicamente com base no espaço disponível */
  gap: 3rem 2rem;

  /* Garante que, em espaços muito pequenos, apenas uma coluna seja exibida */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
