import React, { FC } from 'react';
import {
  Container,
  ContainerTable,
  ContainerAbout,
  Title,
  Img,
} from './Home.styled';
import { StickyHeadTable } from 'components/Table/Table';
import ImgGif from 'assets/img/sticker.webp';
const Home: FC = () => {
  return (
    <Container>
      <Title>Contatcts</Title>
      <ContainerTable>
        <StickyHeadTable />
      </ContainerTable>

      <ContainerAbout>
        <Title>About ME</Title>
        <p>
          Вітаю,спасибі за цікаве тестове завдання, зрозумів у чому потрібно
          підтягнутися і які моменти краще опрацювати.що можу про себе
          розповісти? є досвід більше року в фірмі на позиції Html-Developer.
          Основні обов'язки були: верстка лендів, робота з jQuery, JS. 6 місяців
          роботи на фрілансі frontend-developer (Vue/React), основні обов'язки
          були: Верстка за макетом, робота з Api, робота з Анімацією.
        </p>
        <Title> І якщо що</Title>
        <Img src={ImgGif} alt="" />
      </ContainerAbout>
    </Container>
  );
};
export default Home;
