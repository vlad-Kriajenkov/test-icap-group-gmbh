import React from 'react';
import { IPropsBtn } from './interface';
import { ButtonSt } from './Button.styled';
const Button = (props: IPropsBtn) => {
  const { typeBtn, label } = props;
  return (
    <ButtonSt type={typeBtn}>
      <p>{label}</p>
    </ButtonSt>
  );
};

export { Button };
