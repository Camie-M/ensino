import React from 'react';
import {SafeAreaView } from 'react-native';
import styles from './styled';

interface BaseLayoutProps{
  children: React.ReactNode, 
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <SafeAreaView style={styles.baseLayoutContainer}>
      {children}
    </SafeAreaView>
  );
};

