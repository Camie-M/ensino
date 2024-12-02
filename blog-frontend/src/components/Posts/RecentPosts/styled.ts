import styled from "styled-components";

export const RecentPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: 53.875rem;
  width: 100%.

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const TopRow = styled.div`
  display: flex;
  gap: 2rem;
  height: 62%;

  > div:first-child {
    flex: 1; /* PostCentral ocupa metade */
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1; /* Dois PostRight ocupam metade */
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div:first-child,
    > div:last-child {
      flex: none;
      width: 100%;
    }
  }
`;

export const LastPost = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;

  > div:first-child {
    flex: 1; /* PostCentral ocupa metade */
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1; /* Dois PostRight ocupam metade */
  }

  @media (max-width: 768px) {
    flex-direction: column;

    > div:first-child,
    > div:last-child {
      flex: none;
      width: 100%;
    }
  }
`;

export const FullWidthPost = styled.div`
  width: 100%;
  height: 30%;

  @media (max-width: 768px) {
    padding: 0.5rem 0;
  }
`;
