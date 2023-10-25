import React from 'react';
import { Form } from './ModalContact.styled';
import { InputCustom } from 'components/InputCustom';
import { Button } from 'components/Buttons/Button';

export interface IContact {
  id?: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
}
interface IProps {
  value: IContact;
  handlerChange: any;
  onSubmit: any;
}

const ModalContact = (props: IProps) => {
  const { value, handlerChange, onSubmit } = props;
  return (
    <Form onSubmit={onSubmit}>
      <InputCustom
        type="text"
        name="name"
        id="name"
        handlerChange={handlerChange}
        value={value.name}
        placeholder="Username"
      />

      <InputCustom
        type="text"
        name="email"
        id="email"
        handlerChange={handlerChange}
        value={value.email}
        placeholder="Email"
      />

      <InputCustom
        type="text"
        name="phone_number"
        id="phone"
        handlerChange={handlerChange}
        value={value.phone_number}
        placeholder="Phone"
      />

      <InputCustom
        type="text"
        name="birthday_date"
        id="birthday"
        handlerChange={handlerChange}
        value={value.birthday_date}
        placeholder="Birthday"
      />

      <InputCustom
        type="text"
        name="address"
        id="address"
        handlerChange={handlerChange}
        value={value.address}
        placeholder="Address"
      />

      <Button typeBtn="submit" label="save" />
    
    </Form>
  );
};

export { ModalContact };
