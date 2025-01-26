import React from 'react';
import { RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import styles from './styled';

interface BaseLayoutProps{
  children: React.ReactNode, 
  onFetchPosts?: () => void 
}

export default function BaseLayout({ children, onFetchPosts }: BaseLayoutProps) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    if (onFetchPosts) {
      onFetchPosts();
    }
    setTimeout(() => {
      setRefreshing(false);
    }, 300);
  }, [onFetchPosts]);

  return (
    <SafeAreaView style={styles.baseLayoutContainer}>
      <ScrollView contentContainerStyle={styles.contentContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >{children}</ScrollView>
    </SafeAreaView>
  );
};

