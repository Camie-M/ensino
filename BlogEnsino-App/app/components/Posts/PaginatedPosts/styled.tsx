import styled from 'styled-components/native';

export const PaginatedPostsContainer = styled.View`
  margin-top: 16px;
`;

export const PostsGrid = styled.FlatList`
  margin-bottom: 16px;
`;

export const PaginationControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-vertical: 16px;
`;

export const EmptyMessage = styled.Text`
  text-align: center;
  font-size: 16px;
  color: #666;
  margin-top: 16px;
`;
