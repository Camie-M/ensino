import React from 'react';
import { View } from 'react-native';
import styles from './styled';

const Post: React.FC<{ post: any[] }> = ({ post }) => {
  return (
    <View>
        Pagina de Post
        Titulo
        Imagem
        Autor
        Data
    </View>
  );
};

export default Post;
