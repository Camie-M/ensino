import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  background-color: #e0e0e0;
`;

export const TextContainer = styled.View`
  margin-top: 16px;
`;

export const DateText = styled.Text`
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 12px;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #666;
  line-height: 22px;
`;
