
import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import RootStackParamList  from "@/app/interfaces/navigations";

interface Button{
    text:string,
    color:string;
    route:string
    width:string;
}

export default function Button({ text, color, route, width }: Button) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    const [routeName, paramString] = route.split(', ');
    const params = paramString ? { postId: paramString } : undefined;

    // Explicitly cast routeName to string
    navigation.navigate(routeName as string, params);
  };

  return (
    <S.Button onPress={handlePress} color={color} width={width}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
}



