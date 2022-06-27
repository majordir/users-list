import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';

export const authStore = configureStore({
  reducer: {
    user: userReducer,
  }
});