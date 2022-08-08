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
    removeSeance: (state, action) => {
      state.seances = state.seances.filter(
        seance => seance.id !== action.payload.id,
      );
    },
    addSeance: (state, action) => {
      state.seances.push(action.payload.seance);
    },
    editSeance: (state, action) => {
      state.seances = state.seances.map(seance =>
        seance.id === action.payload.id
          ? { ...seance, ...action.payload.body }
          : seance,
      );
    },
  },
});

export const { setMuscles, setSeances, removeSeance, addSeance, editSeance } =
  trainingSlice.actions;

export default trainingSlice.reducer;
