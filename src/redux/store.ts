import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import authReduser from './auth/auth-slice';
import contactsReduser from './contacts/contacts-slice';
const store = configureStore({
  reducer: {
    auth: authReduser,
    contact: contactsReduser,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
