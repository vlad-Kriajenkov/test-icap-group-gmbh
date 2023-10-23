import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, IErrorPromise } from './interface';
import { ErrorMesege } from 'utils';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const logIn = createAsyncThunk(
  'auth/login',
  async (user: User, thunkAPI: any) => {
    try {
      const { data } = await axios.post('/login/', {
        username: user.userName,
        password: user.password,
      });
      Notify.success(data);

      return data;
    } catch (error) {
      const err: any = error as AxiosError;
      ErrorMesege(err.response?.status);
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
