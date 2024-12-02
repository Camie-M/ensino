import styled from "styled-components";

export const PostRightContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1rem;
  }
`;

export const Image = styled.img`
  width: 60%;
  height: auto;
  border-right: 1px solid ${(props) => props.theme.colors.border};

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
`;

export const TextContainer = styled.div`
  padding: 1rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const AuthorDate = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.authors};
  font-family: ${(props) => props.theme.fonts.primary};
  margin-bottom: 1rem;

  span {
    &:first-child {
      font-weight: bold;
    }

    &:last-child {
      color: ${(props) => props.theme.colors.text};
      font-weight: normal;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.titles};
  font-family: ${(props) => props.theme.fonts.primary};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Summary = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;
