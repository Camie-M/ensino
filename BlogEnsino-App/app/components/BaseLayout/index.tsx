import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styles from './styled';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SafeAreaView style={styles.baseLayoutContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}>{children}</ScrollView>
    </SafeAreaView>
  );
};

export default BaseLayout;
