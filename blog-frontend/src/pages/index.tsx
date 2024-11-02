// pages/index.tsx
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  text-align: center;
`;

const HomePage = () => {
  return (
    <div>
      <Title>Bem-vindo ao Blog de Ensino</Title>
      <p>Este é o frontend teste</p>
    </div>
  );
};

export default HomePage;
