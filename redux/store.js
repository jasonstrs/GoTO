import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import trainingReducer from './features/training/trainingSlice';
import exercicesSliceReducer from './features/training/exercicesSlice';

export default configureStore({
  reducer: {
    exercices: exercicesSliceReducer,
    user: userReducer,
    training: trainingReducer,
  },
});
