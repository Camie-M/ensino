import styled from 'styled-components';

export const SearchContainer = styled.div`
  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    outline: none;

    &:focus {
      border-color: #0070f3;
    }
  }
`;
