import React, { FC, useEffect } from 'react';
import { getAllContats } from 'redux/contacts/contacts-operation';
import { useAppDispatch } from 'redux/store';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllContats())
 
  }, [dispatch]);
  return <>Home d</>;
};
export default Home;
