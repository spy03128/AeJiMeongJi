import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  iamge: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    fetchProfileImage(state, action) {
      state.iamge = action.payload.image;
      AsyncStorage.setItem('token', action.payload.iamge);
    },
  },
});

export const profileActions = profileSlice.actions;
