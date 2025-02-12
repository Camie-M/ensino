import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PostContextType {
  postId: string | null;
  setPostId: (id: string | null) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

export const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [postId, setPostId] = useState<string | null>(null);

  return (
    <PostContext.Provider value={{ postId, setPostId }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostId = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostId deve ser usado dentro de um PostProvider');
  }
  return context;
};
export default {usePostId, PostProvider}