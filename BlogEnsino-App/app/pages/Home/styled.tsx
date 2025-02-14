import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 16px;
  margin-bottom:16px;
`;

export const HeaderSection = styled.View`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 500;
  margin-top: 16px;
  color: #333;
  width: 100%;
`;

export default {Container,HeaderSection,Title}