import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorMesege } from 'utils';
// import { Notify } from 'notiflix';
// import { IErrorPromise } from './interface';
axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const getAllContats = createAsyncThunk(
  'contact/getAllContast',
  async ( ) => {
    try {
      const { data } = await axios.get('/table/?limit=10&offset=10');
      return data;
    } catch (error) {
      const err: any = error as AxiosError;
      ErrorMesege(err.response?.status);
    //   return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
