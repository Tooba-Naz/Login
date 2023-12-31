import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Redux/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice
    // other reducers...
  },
});