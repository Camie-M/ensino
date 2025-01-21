import { useEffect, useState } from 'react';
import { Button, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as S from "./styled"
interface ImagePickerExampleProps {
  imgUrl: string; // Expecta a URL da imagem quando for no modo de edição
}

export default function ImagePickerExample({ imgUrl }: ImagePickerExampleProps) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (imgUrl) {
      setImage(imgUrl);
    }
  }, [imgUrl]); // Sempre que imgUrl mudar, a imagem será atualizada

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        "Permission Required",
        "We need permission to access your camera roll to select an image.",
        [{ text: "OK" }]
      );
    }else{
        return status === 'granted';
    }
    
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      quality: 1,
    });
    setLoading(false);
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <S.Container>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        color="#841584"
      />
      {loading && <ActivityIndicator size="large" color="#00ff00" />}
      {image ? (
        <S.Image source={{ uri: image }}/>
      ) : (
        <S.PlaceholderText>No image selected</S.PlaceholderText>
      )}
    </S.Container>
  );
}