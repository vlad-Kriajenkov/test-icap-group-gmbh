import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, IErrorPromise } from './interface';

import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://technical-task-api.icapgroupgmbh.com/api';

export const logIn = createAsyncThunk(
  'auth/login',
  async (user: User, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/login/', {
        username: user.userName,
        password: user.password,
      });
      Notify.success(data);

      return data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          Notify.failure(error.response.data.error);
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
