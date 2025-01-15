import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerAnchor: {
    flexDirection: 'column',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 8,
  },
  postImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: '#e0e0e0',
  },
  textContainer: {
    marginTop: 16,
  },
  date: {
    fontSize: 12,
    color: '#666',
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
    flex: 1,
  },
  arrowIcon: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default styles;
