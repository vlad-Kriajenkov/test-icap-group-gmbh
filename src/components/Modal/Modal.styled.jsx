import styled from '@emotion/styled';
import BackGraund from 'assets/img/BackgroundBlurs.png';

export const Blackdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(100%, 100%);
  z-index: 100;

  width: 100%;
  height: 100dvh;

  opacity: 1;
  background: rgb(16, 26, 35);
  background-image: url(${BackGraund});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    transform: translate(-50%, -50%);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(-2rem, 2rem);
  background: none;
  font-size: 3rem;
  color: white;
`;
