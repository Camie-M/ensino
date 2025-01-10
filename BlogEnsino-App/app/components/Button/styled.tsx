import styled from 'styled-components/native';
interface ButtonProps {
    color?: string; 
  }
export const BtnContainer = styled.View`
  gap:10px;
  align-items: flex-end;
  width:80%;
`;
export const Button = styled.TouchableOpacity<ButtonProps>` 
  width:60%;
  height:50px;
  background-color: ${(props:any) => props.color || '#007aff'}; 
  padding: 10px;
  border-radius: 5px;
  justify-content: center; 
  align-items: center; 
`;
export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  align-items:center;
  font-weight: bold;
`;