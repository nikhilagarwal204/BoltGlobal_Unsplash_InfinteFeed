import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 5px;
`;

export const UnsplashImage = ({ url, caption, key }) => {
  return (
    <>
      <Img key={key} src={url} alt=""/>
      <h1 style={{ color: 'rgb('+[~~(Math.random() * 255), ~~(Math.random() * 255), ~~(Math.random() * 255)]+')' }}>{caption}</h1>
    </>
  )
}
