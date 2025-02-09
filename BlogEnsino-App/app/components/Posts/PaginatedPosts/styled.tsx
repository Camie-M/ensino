import styled from 'styled-components/native';

export const PaginatedPostsContainer = styled.View`
  flex: 1; 
  margin-top: 16px;
  padding: 0 10px;
`;

export const PostsGrid = styled.FlatList`
  margin-bottom: 16px;
`;

export const PaginationControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-top: 16px;
`;

export default { PaginatedPostsContainer, PostsGrid, PaginationControls, EmptyMessage };
