import { useEffect, useState } from 'react';
import { Button, ActivityIndicator, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as S from "./styled"
interface ImagePickerExampleProps {
  imgUrl: string;
  onImageChange: (uri: string) => void;
}

export default function ImagePickerExample({ imgUrl,onImageChange  }: ImagePickerExampleProps) {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (imgUrl) {
      setImage(imgUrl);
    }
  }, [imgUrl]);

  const pickImage = async () => {
    setLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });
    setLoading(false);
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      onImageChange(imageUri);
    }
  };

  return (
    <S.Container>
      <Button
        title="Escolha uma imagem do seu celular"
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