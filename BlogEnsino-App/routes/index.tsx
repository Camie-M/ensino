import React from 'react';
import { AppRoutes } from './app.routes';
import { AuthProvider } from '@/app/context/AuthContext';
import { PostProvider } from '@/app/context/PostContext';

export function Routes() {
  return (
    <AuthProvider>
      <PostProvider>
        <AppRoutes />
      </PostProvider>
    </AuthProvider>
    
  );
}
