import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerAnchor: {
    flexDirection: 'column', // Garantimos que a imagem fique acima dos textos
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%', // O contêiner ocupa 100% da largura
    height: 200, // Altura fixa para a imagem
    overflow: 'hidden',
    borderRadius: 8,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Ajusta a imagem proporcionalmente
    backgroundColor: '#e0e0e0', // Cor de fundo enquanto carrega
  },
  textContainer: {
    marginTop: 16, // Espaçamento entre a imagem e os textos
  },
  date: {
    fontSize: 12,
    color: '#666', // Cor mais clara para a data
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    flex: 1, // Faz o título ocupar o espaço disponível
  },
  arrowIcon: {
    fontSize: 16,
    color: '#007AFF', // Cor do ícone (azul no exemplo)
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
