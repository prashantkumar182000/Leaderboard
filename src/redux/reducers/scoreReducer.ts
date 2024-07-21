// src/redux/reducers/scoreReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ScoreState {
  username: string;
  score: string;
}

const initialState: ScoreState[] = [];

const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<ScoreState>) => {
      state.push(action.payload);
    },
  },
});

export const { addScore } = scoreSlice.actions;

export default scoreSlice.reducer;
