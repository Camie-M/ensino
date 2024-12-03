import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;