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
  background-color: #fff3f3;
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
  gap:10px;
  align-items:center;
`;
export const PostContentTitle = styled.Text`
  font-size: 30px;
  color: #1A1A1A;
`;
export const PostContent = styled.Text`
  font-size: 20px;
  color: #667085;
`;
export const PostContentAuthor = styled.Text`
  font-size: 16px;
  color: #af93f6;
`;
export const FooterText = styled.Text`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  color: #888;
`;
