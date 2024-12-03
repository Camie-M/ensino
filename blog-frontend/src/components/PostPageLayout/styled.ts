import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const Data = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.authors};
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titles};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.text};
`;

export const Author = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.authors};
  margin-top: 1rem;
`;
