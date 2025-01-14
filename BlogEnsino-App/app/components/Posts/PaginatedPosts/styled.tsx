import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  paginatedPostsContainer: {
    marginTop: 16,
  },
  postsGrid: {
    marginBottom: 16,
  },
  paginationControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  emptyMessage: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginTop: 16,
  },
});

export default styles;
