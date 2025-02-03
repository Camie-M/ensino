import styled from 'styled-components/native';

export const ContainerAnchor = styled.TouchableOpacity`
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  margin-bottom: 16px;
  elevation: 3;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
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

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  flex: 1;
`;

export const ArrowIcon = styled.Text`
  font-size: 16px;
  color: #007AFF;
  margin-left: 8px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #666;
`;

export default {ContainerAnchor,ImageContainer,PostImage,TextContainer,DateText,TitleContainer,Title,ArrowIcon,Description}