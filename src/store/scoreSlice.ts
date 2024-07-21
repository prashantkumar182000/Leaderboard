import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Score {
  username: string;
  score: string; // formatted as MM:SS:MSS
  amount: string;
}

interface ScoresState {
  scores: Score[];
}

const initialState: ScoresState = {
  scores: [],
};

const scoreSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<Score>) {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.score.localeCompare(b.score)); // Sort scores in ascending order
      if (state.scores.length > 10) state.scores.pop(); // Keep only top 10 scores
    },
  },
});

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;
