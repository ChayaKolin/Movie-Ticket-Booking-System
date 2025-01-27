import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import moviesReducer from './slices/moviesSlice.ts';
import seatsReducer from './slices/seatsSlice.ts';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    seats: seatsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;