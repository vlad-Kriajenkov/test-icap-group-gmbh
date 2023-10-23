import React from 'react';
import { IProps } from './interface';
import { InputBox, Input, Label } from './InputCustom.styled';

const InputCustom = (props: IProps) => {
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
      
    </InputBox>
  );
};

export { InputCustom };
