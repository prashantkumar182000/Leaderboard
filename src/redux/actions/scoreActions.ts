// src/redux/actions/scoreActions.ts
import { createAction } from '@reduxjs/toolkit';

export const ADD_SCORE = 'ADD_SCORE';

export interface AddScorePayload {
    username: string;
    score: string;
}

export const addScore = createAction<AddScorePayload>(ADD_SCORE);
