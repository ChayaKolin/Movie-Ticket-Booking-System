import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';

// Selector to get seats for a specific movie and time
export const getSeatsByMovieAndTime = (movieId: string, startTime: string) => createSelector(
  [(state: RootState) => state.seats],
  (seats) => seats[movieId]?.[startTime] || []
);