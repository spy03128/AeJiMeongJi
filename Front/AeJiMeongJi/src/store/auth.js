import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  user: {
    email: '',
    password: '',
    name: '',
    nickname: '',
    phone: '',
  },
  token: '',
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = null;
    },
    signup(state, action) {
      state.user = action.payload;
    },
    fetchInfo(state, action) {
      state.user.email = action.payload.email
      state.user.password = action.payload.password
    },
  },
});

export const authActions = authSlice.actions;
