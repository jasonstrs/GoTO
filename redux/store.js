import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import trainingReducer from './features/training/trainingSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    training: trainingReducer,
  },
});
