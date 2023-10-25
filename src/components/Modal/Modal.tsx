import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Blackdrop, ButtonClose } from './Modal.styled';
import { IModalProps } from './interface';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { refreshStateErroro } from 'redux/contacts/contacts-slice';
import { useAppDispatch } from 'redux/hook';

const Modal = (props: IModalProps) => {
  const { children, handleBurger, targetModalAll } = props;
  const dispatch = useAppDispatch();
  const [targetModal, setTargetModal] = useState(false);
  const errorArray = {
    name: [],
    email: [],
    birthday_date: [],
    phone_number: [],
    address: [],
  };

  useEffect(() => {
    setTargetModal(handleBurger);
  }, [handleBurger]);

  const closeModal = () => {
    setTargetModal(false);
    targetModalAll('closeAll');
    dispatch(refreshStateErroro(errorArray));
  };

  const portalDiv = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <Blackdrop className={targetModal ? 'active' : ''}>
      <div>{children}</div>
      <ButtonClose type="button" onClick={closeModal}>
        <AiOutlineCloseCircle />
      </ButtonClose>
    </Blackdrop>,
    portalDiv
  );
};
export { Modal };
