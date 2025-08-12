import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice'; // ✅ import reducer, not slice

export const store = configureStore({
  reducer: {
    message: messageReducer, // ✅ reducer name matches key in state
  },
});

