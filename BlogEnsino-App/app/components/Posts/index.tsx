import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styled';
import { Ionicons } from '@expo/vector-icons';

interface PostProps {
  id: string;
  title: string;
  text: string;
  author: string;
  image_url: string;
  created_at: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
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
      <View style={styles.imageContainer}>
        <Image source={{ uri: image_url }} style={styles.postImage} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.date}>{formatDate(created_at)}</Text>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Ionicons name="arrow-forward" style={styles.arrowIcon} />
        </View>

        <Text style={styles.description}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Post;
