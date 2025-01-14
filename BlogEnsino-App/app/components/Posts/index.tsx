import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styled';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones (exemplo com Ionicons)

interface PostProps {
  id: string;
  title: string;
  text: string;
  author: string;
  image_url: string;
  created_at: string;
}

// Função para formatar a data
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long', // Nome completo do dia da semana
    day: 'numeric', // Dia do mês
    month: 'long', // Nome completo do mês
    year: 'numeric', // Ano com 4 dígitos
  }).format(date);
};

const Post: React.FC<PostProps> = ({
  id,
  title,
  text,
  image_url,
  created_at,
}) => {
  const handleNavigation = () => {
    console.log(`Navigate to post ${id}`);
  };

  return (
    <TouchableOpacity style={styles.containerAnchor} onPress={handleNavigation}>
      {/* Imagem */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: image_url }} style={styles.postImage} />
      </View>

      {/* Textos */}
      <View style={styles.textContainer}>
        {/* Data formatada */}
        <Text style={styles.date}>{formatDate(created_at)}</Text>

        {/* Título com ícone */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="arrow-forward" style={styles.arrowIcon} />
        </View>

        {/* Descrição */}
        <Text style={styles.description}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
