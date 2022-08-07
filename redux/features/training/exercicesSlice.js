import { createSlice } from '@reduxjs/toolkit';

export const exerciceSlice = createSlice({
  name: 'exercices',
  initialState: {},
  reducers: {
    setExercices: (state, action) => {
      const { idSeance, exercices } = action.payload;
      state[idSeance] = exercices;
    },
    addExercice: (state, action) => {
      const { idSeance, exercice } = action.payload;
      state[idSeance].push(exercice);
    },
  },
});

export const { setExercices, addExercice } = exerciceSlice.actions;

export default exerciceSlice.reducer;
