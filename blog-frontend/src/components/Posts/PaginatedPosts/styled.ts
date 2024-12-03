import styled from "styled-components";

export const PaginatedPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:3rem;
`;

export const PostsGrid = styled.div`
 display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)); /* Ajusta dinamicamente com base no espaço disponível */
  gap: 3rem 2rem;

  /* Garante que, em espaços muito pequenos, apenas uma coluna seja exibida */
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PaginationControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 5px;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 0.3s;

    &:hover {
      background: ${(props) => props.theme.colors.hoverAnchor};
      color: #fff;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;
