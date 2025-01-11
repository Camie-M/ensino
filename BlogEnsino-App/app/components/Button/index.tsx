
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import { RootStackParamList } from "@/app/interfaces/navigations";

interface Button{
    text:string,
    color:string;
    route:keyof RootStackParamList;
    width:string;
}

export default function Button({ text, color, route, width }: Button) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <S.Button onPress={() => navigation.navigate(route)} color={color} width={width}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
}

