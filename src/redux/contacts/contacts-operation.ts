import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IErrorPromise, IContact, IContactAdd } from './interface';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const getAllContats = createAsyncThunk(
  'contact/getAllContast',
  async (offset?: number) => {
    try {
      const { data } = await axios.get(`/table/?limit=1000&offset=0",`);
      return data;
    } catch (error) {
      // return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const getIdContatc = createAsyncThunk(
  'contact/getIdContatc',
  async (id: number | undefined, thunkAPI: any) => {
    try {
      const { data } = await axios.get(`/table/${id}/`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);

export const patchContact = createAsyncThunk(
  'contact/getIdContatc',
  async (newUser: IContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/table/${newUser.id}/`, {
        name: newUser.name,
        email: newUser.email,
        birthday_dat: newUser.birthday_date,
        phone_number: newUser.phone_number,
        address: newUser.address,
      });
      getAllContats();
      Notify.success('Contact Eddit');
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          return rejectWithValue(error.response.data);
        }
        return rejectWithValue({
          error: 'Произошла ошибка при отправке запроса',
        });
      } else {
        return rejectWithValue({ error: 'Неизвестная ошибка' });
      }
    }
  }
);

export const addContact = createAsyncThunk<
  IContactAdd,
  IContactAdd,
  { rejectValue: unknown }
>('contact/addContact', async (contact, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/table/', contact);
    getAllContats();

    Notify.success('Contact Add');
    return data as IContactAdd;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({
        error: 'Произошла ошибка при отправке запроса',
      });
    } else {
      return rejectWithValue({ error: 'Неизвестная ошибка' });
    }
  }
});

export const deletContact = createAsyncThunk(
  'contact/deleteContact',
  async (id: number | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/table/${id}/`);
      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          Notify.failure(error.response.data.detail);
          return rejectWithValue(error.response.data);
        }
        return rejectWithValue({
          error: 'Произошла ошибка при отправке запроса',
        });
      } else {
        return rejectWithValue({ error: 'Неизвестная ошибка' });
      }
    }
  }
);
