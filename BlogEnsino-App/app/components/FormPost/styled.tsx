import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 20px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
`

export const Input = styled.TextInput`
    border: 1px solid gray;
    border-radius: 8px;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
`

export const LargeInput = styled(Input)`
    min-height: 200px;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: #4CAF50;
  border-radius: 8px;
  padding: 12px;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export default {SafeAreaView,Title,Input,LargeInput,SubmitButton,SubmitButtonText}