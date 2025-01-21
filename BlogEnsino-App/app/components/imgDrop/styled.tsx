import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: 'center';
  justify-content: 'center';
  background-color: '#f5f5f5';
  padding: 20px;
`;
export const Image = styled.Image`
  width: max-content;
  height: 200px;
  border-radius: 10px;
  margin-top: 20px;
`;
export const PlaceholderText = styled.Text`
  font-size: 16px;
  color: '#888';
  margin-top: 20px;
`;

export default {Container,Image, PlaceholderText}