import styled from 'styled-components/native';

export const SearchContainer = styled.View`
  margin-vertical: 16px;
  width:80%;
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  width: 100%;
  padding-horizontal: 8px;
  border-width: 1px;
  border-radius: 4px;
  border-color: #ccc;
  background-color: #fff;
  color: #333;
`;

export default {SearchContainer,SearchInput}
