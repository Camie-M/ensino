import styled from 'styled-components/native';
interface ButtonProps {
    color?: string; 
    width?: string; 
  }
export const Button = styled.TouchableOpacity<ButtonProps>`
  width: ${(props: { width: any; }) => props.width || '#100%'};
  height: 50px;
  background-color: ${(props: { color: any; }) => props.color || '#007aff'};
  padding: 10px;
  border-radius: 5px;
  justify-content:center;
  text-align:center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  align-items:center;
  font-weight: bold;
`;

export default {Button, ButtonText}