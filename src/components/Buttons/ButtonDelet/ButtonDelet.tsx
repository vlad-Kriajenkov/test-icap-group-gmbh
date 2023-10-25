import React, { FC } from 'react';
import { Button } from './ButtonDelet.styled';

interface IProps {
  typeBtn: 'submit' | 'reset' | 'button' | undefined;
  handleClick: any;
  children: JSX.Element;
  color?: string;
}

const ButtonDelet: FC<IProps> = props => {
  const { typeBtn, handleClick, children, color } = props;
  return (
    <Button color={color} onClick={handleClick} type={typeBtn}>
      {children}
    </Button>
  );
};

export { ButtonDelet };
