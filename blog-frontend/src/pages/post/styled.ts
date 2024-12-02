import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.titles};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Author = styled.p`
  color: ${(props) => props.theme.colors.authors};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;
