import { createSlice } from '@reduxjs/toolkit';
import { IState } from './interface';
import { logIn } from './auth-operation';

const initialState: IState = {
  user: { userName: '', password: '' },
  isLogin: false,
};

export const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.pending.toString()]: state => {
      state.isLogin = false;
    },
    [logIn.fulfilled.toString()]: (state, action) => {
      state.user = { ...action.meta.arg };
      state.isLogin = true;
    },
    [logIn.rejected.toString()]: state => {
      state.isLogin = false;
    },
  },
});

export default AuthSlice.reducer;
