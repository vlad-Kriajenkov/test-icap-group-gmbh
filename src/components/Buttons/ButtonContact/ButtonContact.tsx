import React, { FC } from 'react';
import { Button } from './ButtonContact.styled';

interface IProps {
  typeBtn: 'submit' | 'reset' | 'button' | undefined;
  targetModal:  any;
  children: JSX.Element;
  color?: string;
}

const ButtonContact: FC<IProps> = props => {
  const { typeBtn, targetModal, children, color } = props;
  return (
    <Button color={color} onClick={() => targetModal('add')} type={typeBtn}>
      {children}
    </Button>
  );
};

export { ButtonContact };
