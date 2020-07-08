import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>OIE</small>
      </Title>
      <Paragrafo>Lorem ipsu dolo si amerere.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
