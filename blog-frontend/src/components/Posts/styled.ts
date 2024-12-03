import styled from "styled-components";

interface ContainerProps {
  type: string;
}

export const ContainerAnchor = styled.a<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.type === "column" ? "column" : "row")};
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 0.8rem;
  padding: 1rem;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => props.theme.colors.hoverAnchor};
  }

  /* Ajusta proporções dos elementos internos */
  > div:first-child {
    flex: ${(props) => (props.type === "row" ? "0 0 60%" : "0 0 50%")};
    height: ${(props) => (props.type === "row" ? "100%" : "50%")};
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div:first-child {
      flex: none;
      width: 100%;
      height: auto;
    }
  }
`;
