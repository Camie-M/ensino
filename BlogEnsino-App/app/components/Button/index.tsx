import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as S from "./styled";
import RootStackParamList from "@/app/types/navigations";

interface Button {
  text: string;
  color: string;
  route: string;
  width?: string;
  disabled?: boolean;
}

export default function Button({ text, color, route, width, disabled }: Button) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    if (disabled) return;

    const [routeName, paramString] = route.split(', ');
    const params = paramString ? { postId: paramString } : undefined;
    navigation.navigate(routeName as string, params);
  };

  return (
    <S.Button onPress={handlePress} color={color} width={width} disabled={disabled}>
      <S.ButtonText>{text}</S.ButtonText>
    </S.Button>
  );
}
