import styled from 'styled-components/native';

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 16px;
  padding: 0 10px;
`;

export const PostContainer = styled.SafeAreaView`
  min-height: 200px;
  height: auto;
  width: 320px;
  background-color: #ffffff;
  align-items: left;
  justify-content: center;
  padding: 10px;
  gap: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

export const TxtContainer = styled.View`
  gap: 10px;
`;

export const PostContentTitle = styled.Text`
  font-size: 20px;
  color: #1A1A1A;
`;

export const PostContent = styled.Text`
  font-size: 15px;
  color: #667085;
`;

export const PostContentAuthor = styled.Text`
  font-size: 13px;
  color: #af93f6;
`;

export const BtnContainer = styled.View`
  align-items: center;
`;

export const FooterText = styled.Text`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  color: #888;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-top: 16px;
`;

export const PaginationControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 0 10px;
`;

export const PageIndicator = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export default { 
  ListContainer, 
  PostContainer, 
  TxtContainer, 
  BtnContainer, 
  PostContentTitle, 
  PostContent, 
  PostContentAuthor, 
  FooterText, 
  EmptyMessage, 
  PaginationControls, 
  PageIndicator 
};
