import React from 'react';
import { AppRoutes } from './app.routes';
import { AuthProvider } from '@/app/context/AuthContext';

export function Routes() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    
  );
}
