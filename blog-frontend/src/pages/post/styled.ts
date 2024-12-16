import styled from "styled-components";

export const GridContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 89%;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 1280px) {
    flex-wrap: wrap;
    padding: 1.5rem;
  }
`;

export const LeftGrid = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 1rem;
    font-weight: bold;
  }

  > a {
    height: 27rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.background};
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex: 1 0 100%;
  }
`;


export const RightGrid = styled.div`
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width:100%;
`;

export const PostData = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary};
  margin-bottom: 1rem;

  span {
    font-weight: bold;
  }
`;

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.titles};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PostImageWrapper = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const PostText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
`;

export const PostAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.authors};
  margin-top: 1rem;
`;
