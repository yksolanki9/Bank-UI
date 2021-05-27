import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  transition: all 0.1s ease-out;
  background: hsl(0, 0%, 100%);
  padding: 40px 40px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 5px 10px hsla(207, 26%, 17%, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  font-weight: 800;
`;

export default function SiteHeader() {
  return (
    <Container>
      <Title>Find your Bank</Title>
    </Container>
  );
}