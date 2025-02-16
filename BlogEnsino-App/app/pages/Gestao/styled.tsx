import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 30px;
`;

export const UserContainer = styled.SafeAreaView`
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
  gap:10px;
`;

export const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`

export const NameText = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

export const EmailText = styled.Text`
  font-size: 12px;
  font-style: italic;
  color: #a1a1a1;
`

export const BtnContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${(props: { color: any; }) => (props.color ? props.color : '#007BFF')};
  padding: 10px 15px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin: 5px;
  flex:1;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;



export default { Container, Title, UserContainer, TxtContainer, BtnContainer, ButtonContainer,ButtonText }