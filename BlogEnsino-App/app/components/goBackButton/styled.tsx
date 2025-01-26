import styled from "styled-components/native";

export const BackButton = styled.TouchableOpacity`
  width:100px;
  flex-direction:row;
  align-items:center;
  gap:5px;
  margin-bottom:10px;
`;

export const BackButtonText = styled.Text`
  color: #007aff; /* Cor do texto */
  font-size: 18px;
  font-weight:bold;
`;


export default {BackButton,BackButtonText}