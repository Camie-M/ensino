import styled from 'styled-components/native';

export const PageContainer = styled.View`
    flex:1;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
`
export const SubmitButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  border-radius: 8px;
  padding: 12px;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  flex: 1; /* Faz o input ocupar todo o espaço restante */
  font-size: 16px;
  color: #000;
  padding: 10px;
`;

export default {PageContainer,Title,Input,SubmitButton,SubmitButtonText,Container}