import React, { ChangeEvent, useEffect, useState, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hook';
import {
  deletContact,
  getIdContatc,
  patchContact,
} from 'redux/contacts/contacts-operation';
import { ModalContact } from '../ModalContact/ModalContact';
import { ButtonDelet } from 'components/Buttons';
import { AiFillDelete } from 'react-icons/ai';
import { ButtonPositopn } from './ModalContactEddit.styled';
import { refreshPage, refreshStateErroro } from 'redux/contacts/contacts-slice';
interface IContacProps {
  id: number | undefined;
}

const ModalContactEddit = (props: IContacProps) => {
  const { id } = props;
  const dispatch = useAppDispatch();
  const contactData = useAppSelector(select => select.contact.contact);
  const errorArray = {
    name: [],
    email: [],
    birthday_date: [],
    phone_number: [],
    address: [],
  };
  const [userData, setUserData] = useState({
    id: 0,
    name: '',
    email: '',
    phone_number: '',
    birthday_date: '',
    address: '',
  });

  useEffect(() => {
    dispatch(getIdContatc(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (contactData) {
      setUserData({
        id: contactData.id,
        name: contactData.name,
        email: contactData.email || '',
        phone_number: contactData.phone_number || '',
        birthday_date: contactData.birthday_date || '',
        address: contactData.address || '',
      });
    }
  }, [contactData]);

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    dispatch(patchContact(userData));
    dispatch(refreshStateErroro(errorArray));
    dispatch(refreshPage());
  };
  const onDeleteContact = () => {
    dispatch(deletContact(id));
  };
  return (
    <>
      <ModalContact
        value={userData}
        onSubmit={onSubmit}
        handlerChange={handlerChange}
      />
      <ButtonPositopn>
        <ButtonDelet color="red" typeBtn="button" handleClick={onDeleteContact}>
          <AiFillDelete />
        </ButtonDelet>
      </ButtonPositopn>
    </>
  );
};

export { ModalContactEddit };
