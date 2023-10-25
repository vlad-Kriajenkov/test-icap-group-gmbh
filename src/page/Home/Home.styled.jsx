import styled from '@emotion/styled';
import backGround from 'assets/img/BackgroundBlurs.png';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100dvh;

  background-image: url(${backGround});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContainerTable = styled.div`
  width: 70rem;
`;
export const ContainerAbout = styled.div`
  width: 70rem;
`;
export const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem 0rem;
`;

export const Img = styled.img`
  width: 20rem;
`