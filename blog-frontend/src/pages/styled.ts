import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  width: 89%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;