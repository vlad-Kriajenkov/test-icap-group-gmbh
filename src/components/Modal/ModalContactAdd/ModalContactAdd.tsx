import React, { ChangeEvent, useState, FormEvent } from 'react';

import { useAppDispatch } from 'redux/hook';
import { addContact } from 'redux/contacts/contacts-operation';
import { ModalContact } from '../ModalContact/ModalContact';
import { refreshPage, refreshStateErroro } from 'redux/contacts/contacts-slice';

const ModalContactAdd = () => {
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    birthday_date: '',
    phone_number: '',
    address: '',
  });

  const errorArray = {
    name: [],
    email: [],
    birthday_date: [],
    phone_number: [],
    address: [],
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(addContact(userData));
    dispatch(refreshStateErroro(errorArray));
    dispatch(refreshPage())
  };

  return (
    <ModalContact
      value={userData}
      onSubmit={onSubmit}
      handlerChange={handlerChange}
    />
  );
};

export { ModalContactAdd };
