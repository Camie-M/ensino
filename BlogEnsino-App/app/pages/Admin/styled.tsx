import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #f5f5f5;
  margin-top:20px;
`;


export const ListContainer = styled.View`
  flex: 1;
  justify-content: top;
  align-items: right;
  background-color: #f5f5f5;
  margin-top:20px;
`;


export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-weight: bold;
  font-size:30px;
`;

export default {Container,ListContainer,Title}