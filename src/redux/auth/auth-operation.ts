import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, IErrorPromise } from './interface';
 
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
    
      return thunkAPI.rejectWithValue(error as IErrorPromise);
    }
  }
);
