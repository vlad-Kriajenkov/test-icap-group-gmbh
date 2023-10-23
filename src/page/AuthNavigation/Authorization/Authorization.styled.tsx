import styled from '@emotion/styled';
import BackImg from 'assets/img/BackgroundBlurs.png';
export const Container = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  background-image: url(${BackImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  width: 100%;
  background: radial-gradient(
    circle at bottom right,
    rgba(127, 73, 99, 0.6) 0,
    rgba(34, 62, 76, 0.5) 100%
  );
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.25);
  border-right: 1px solid rgba(152, 152, 152, 0.18);
  border-left: 1px solid rgba(43, 43, 43, 0.3);
  border-bottom: 1px solid rgba(43, 43, 43, 0.3);
  border-radius: 0.75rem;

  @media screen and (min-width: 426px) {
    width: 30rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
`;
