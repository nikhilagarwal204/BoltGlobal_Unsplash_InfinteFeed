import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
  color: white;
`;

const H1 = styled.h1`
  font-family: 'poppinssemibold', sans-serif;
  margin-bottom: 0.5em;
`;

export const Heading = () => {

  return (
    <Header>
      <H1>BOLT Global</H1>
      <p>Our goal is to create a full ecosystem for the user, powered by the Blockchain.</p>
      <p>Download BOLT+ & Pegasus today!</p>
    </Header>
  )
}
