import React from 'react';
import { RefreshControl } from 'react-native';
import * as S from './styled';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <S.BaseLayoutContainer>
      <S.ContentContainer>
        {children}
      </S.ContentContainer>
    </S.BaseLayoutContainer>
  );
}
