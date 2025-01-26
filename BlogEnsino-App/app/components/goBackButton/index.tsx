import { NavigationProp, useNavigation } from "@react-navigation/native";
import * as S from "./styled"; // Importa os estilos
import RootStackParamList from "@/app/types/navigations";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function GoBackButton() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <S.BackButton onPress={() => navigation.goBack()}>
      <Ionicons name={"arrow-back-outline"} size={18} color={"#007aff"} />
      <S.BackButtonText>
        Voltar
      </S.BackButtonText>
    </S.BackButton>
  );
}
