import { createSlice } from '@reduxjs/toolkit';
import { getAllContats } from './contacts-operation';
import { IContact, IContactStateProps } from './interface';
const initialState = {
  contacts: [],
} as IContactStateProps;
export const ContactsSlice = createSlice({
  name: 'ContactsSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllContats.fulfilled.toString()]: (state, { payload }) => {
      const arrCon: IContact[] = payload.results;
      state.contacts = [...arrCon];
    },
  },
});
export default ContactsSlice.reducer;
