import { configureStore } from '@reduxjs/toolkit';
import scoreReducer, { Score } from './store/scoreSlice';

const initialScores: Score[] = [
  { username: 'McRamble', score: '00:30:23', amount: '₹50000' },
  { username: 'Anjum', score: '00:40:23', amount: '₹5000' },
  { username: 'Pragati Azad', score: '00:50:23', amount: '₹500' },
  { username: 'Muhammed Anjum Kunnummal', score: '01:00:23', amount: '' },
  { username: 'Razzi', score: '01:10:23', amount: '' },
  { username: 'Hannibal Hector', score: '01:20:23', amount: '' },
  { username: 'Vijay', score: '01:30:23', amount: '' },
  { username: 'Rajveer', score: '01:40:23', amount: '' },
  { username: 'Prashant Kumar', score: '01:50:23', amount: '' },
  { username: 'Chandra Shekhar', score: '02:00:23', amount: '' },
];

const preloadedState = {
  scores: {
    scores: initialScores,
  },
};

const store = configureStore({
  reducer: {
    scores: scoreReducer,
  },
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
