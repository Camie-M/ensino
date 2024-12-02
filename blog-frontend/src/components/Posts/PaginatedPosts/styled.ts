import styled from "styled-components";

export const PaginatedPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
  height: 70.188rem;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Três colunas */
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* Duas colunas para telas médias */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Uma coluna para telas pequenas */
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
  }

  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
