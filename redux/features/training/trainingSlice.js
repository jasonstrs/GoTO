import { createSlice } from '@reduxjs/toolkit';

export const trainingSlice = createSlice({
  name: 'training',
  initialState: {
    muscles: [],
    seances: [],
  },
  reducers: {
    setMuscles: (state, action) => {
      state.muscles = action.payload.muscles;
    },
    setSeances: (state, action) => {
      state.seances = action.payload.seances;
    },
  },
});

export const { setMuscles, setSeances } = trainingSlice.actions;

export default trainingSlice.reducer;
