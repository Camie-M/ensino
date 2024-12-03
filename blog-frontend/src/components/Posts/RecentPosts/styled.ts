import styled from "styled-components";

export const RecentPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 31rem;

  > div:first-child {
    flex: 1;
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;

    > div:first-child,
    > div:last-child {
      width: 100%;
    }
  }
`;

export const LastPost = styled.div`
  height: 100%;
`;

export const SidePosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const FullWidthPost = styled.div`
  width: 100%;
  height: 15.375rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 0.5rem 0;
  }
`;
