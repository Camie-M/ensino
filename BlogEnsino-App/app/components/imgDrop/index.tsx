import { useEffect, useState } from 'react';
import { Button, Image, View, StyleSheet, ActivityIndicator, Text, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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
    <View style={styles.container}>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        color="#841584"
      />
      {loading && <ActivityIndicator size="large" color="#00ff00" />}
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Text style={styles.placeholderText}>No image selected</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});
