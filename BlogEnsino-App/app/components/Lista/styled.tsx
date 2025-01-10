import { FlatList } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
  color?: string; // Cor opcional
}

export const StyledFlatList = styled(FlatList)`
 
`;

export const PostContainer = styled.View`
  width: 90%;
  min-height:200px;
  height: auto;
  background-color: #e8e8e8;
  border-radius: 10px;
  gap: 30px;
  margin-bottom: 20px;
  align-items: left;
  justify-content: center;
  padding:10px;
`;
export const TxtContainer = styled.View`
  gap:10px;
`;
export const BtnContainer = styled.View`
  align-items:center;
  gap:10;
`;
export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height:50px;
  background-color: ${(props:any) => props.color || '#007aff'}; 
  padding: 10px;
  border-radius: 5px;
`;

export const PostContent = styled.Text`
  font-size: 16px;
  color: #333;
`;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align:center;
`;

export const FooterText = styled.Text`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  color: #888;
`;
