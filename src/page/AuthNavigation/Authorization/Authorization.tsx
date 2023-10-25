import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Container, Form, Title } from './Authorization.styled';
import { InputCustom, Button } from 'components';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAppDispatch } from 'redux/hook';
import { shemaForm } from './shema';
import { logIn } from 'redux/auth/auth-operation';

const Authorization: FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        return setUserName(value);
      case 'password':
        return setPassword(value);
      default:
        break;
    }
  };
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await shemaForm.validate({ userName, password });
      dispatch(logIn({ userName, password }));
    } catch (error) {
      const err = (error as Error).message;
      Notify.failure(err);
    }
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Title>Authorization</Title>
        <InputCustom
          type="text"
          name="name"
          id="name"
          handlerChange={handlerChange}
          value={userName}
          placeholder="Username"
        />

        <InputCustom
          type="password"
          name="password"
          id="password"
          handlerChange={handlerChange}
          value={password}
          placeholder="Password"
        />
        <Button typeBtn="submit" label="Login" />
      </Form>
    </Container>
  );
};
export default Authorization;
