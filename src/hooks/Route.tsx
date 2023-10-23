import React, { FC } from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from 'redux/hook';

interface IPrivateRoute {
  component: JSX.Element;
  redirectTo: string;
}

export const Private: FC<IPrivateRoute> = ({
  component,
  redirectTo = '/home',
}) => {
  const isLogin = useAppSelector(state => state.auth.isLogin);
  console.log(isLogin);

  const shouldRedirect = !isLogin;
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export const Public: FC<IPrivateRoute> = ({ component, redirectTo = '/home' }) => {
  const isLogin = useAppSelector(state => state.auth.isLogin);
  return isLogin ? <Navigate to={redirectTo} /> : component;
};
