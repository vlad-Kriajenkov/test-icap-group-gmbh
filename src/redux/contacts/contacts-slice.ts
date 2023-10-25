import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deletContact,
  getAllContats,
  getIdContatc,
  patchContact,
} from './contacts-operation';
import { IContact, IInitialState } from './interface';

const initialState: IInitialState = {
  contactsInfo: {
    contactsArrr: [],
    count: 0,
  },
  contact: {
    id: 0,
    name: '',
    email: '',
    birthday_date: '',
    phone_number: '',
    address: '',
  },
  errorArray: {
    name: [],
    email: [],
    birthday_date: [],
    phone_number: [],
    address: [],
  },
  refreshPage: false
};
export const ContactsSlice = createSlice({
  name: 'ContactsSlice',
  initialState,
  reducers: {
    refreshStateErroro: (state, action) => {
      console.log(action.payload);
      state.errorArray = action.payload;
    },
    refreshPage: state => {
      state.refreshPage = !state.refreshPage
    },
  },
  extraReducers: {
    [getAllContats.fulfilled.toString()]: (state, { payload }) => {
      const arrCon: IContact[] = payload.results;
      state.contactsInfo.contactsArrr = [...arrCon];
      state.contactsInfo.count = payload.count;
    },
    [getIdContatc.pending.toString()]: (state, { payload }) => {
     
    },
    [getIdContatc.fulfilled.toString()]: (state, { payload }) => {
      state.contact = payload;
      
    },
    [getIdContatc.rejected.toString()]: (state, { payload }) => {
      
    },

    [patchContact.fulfilled.toString()]: (state, { payload }) => {
      state.contact = payload;
 
    },
    [patchContact.rejected.toString()]: (state, action) => {
     
    },
    [addContact.pending.toString()]: (state, { payload }) => {},
    [addContact.fulfilled.toString()]: (state, { payload }) => {
      state.errorArray = {
        name: [],
        email: [],
        birthday_date: [],
        phone_number: [],
        address: [],
      };
    },
    [addContact.rejected.toString()]: (state, { payload }) => {
      state.errorArray = payload;
    },

    [deletContact.fulfilled.toString()]: state => {},
    [deletContact.rejected.toString()]: state => {},
  },
});
const { actions } = ContactsSlice;
export const { refreshStateErroro, refreshPage } = actions;
export default ContactsSlice.reducer;
