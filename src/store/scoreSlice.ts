import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Score {
  username: string;
  score: string; // formatted as MM:SS:MSS
  amount: string;
  timestamp: number; // Add a timestamp field
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
    addScore(state, action: PayloadAction<Omit<Score, 'timestamp'>>) {
      const newScore = {
        ...action.payload,
        timestamp: Date.now(), // Add a timestamp to the new score
      };
      const newScores = [...state.scores, newScore]; // Create a new array with the new score
      newScores.sort((a, b) => a.score.localeCompare(b.score)); // Sort the new array
      state.scores = newScores; // Update the state immutably
    },
  },
});

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;
