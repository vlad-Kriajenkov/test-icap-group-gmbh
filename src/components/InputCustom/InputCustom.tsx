import React from 'react';
import { IProps } from './interface';
import { InputBox, Input, Label, ErrorMesege } from './InputCustom.styled';
import { useAppSelector } from 'redux/hook';

const InputCustom = (props: IProps) => {
  const err = useAppSelector(state => state.contact.errorArray);
  const { type, name, id, value, placeholder, handlerChange } = props;

  return (
    <InputBox>
      <Input
        type={type}
        name={name}
        id={id}
        onChange={handlerChange}
        value={value}
      />
      <Label>{placeholder}</Label>
      <ErrorMesege>{err[name] && err[name][0]}</ErrorMesege>
    </InputBox>
  );
};

export { InputCustom };
