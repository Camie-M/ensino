import styled from 'styled-components/native';

export const PostContainer = styled.SafeAreaView`
  min-height:200px;
  height: auto;
  width:320px;
  background-color: #ffffff;
  align-items: left;
  justify-content: center;
  padding:10px;
  gap: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  
`;
export const TxtContainer = styled.View`
  gap:10px;
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
  align-items:center;
`;
export const FooterText = styled.Text`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  color: #888;
`;




export default { PostContainer, TxtContainer, BtnContainer, PostContentTitle, PostContent, PostContentAuthor, FooterText };