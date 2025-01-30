import styled from 'styled-components/native';

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 50, // Ajuste para evitar sobreposição do botão
  },
})`
  padding: 16px;
`;