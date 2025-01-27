import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import seats from '../../mockData/seats.json';
import type { RootState } from '../store';

export const updateSeatAvailability = createAsyncThunk(
  'seats/updateSeatAvailability',
  async (
    { movieId, startTime, ids }: { movieId: string; startTime: string; ids: string[] },
    { getState, rejectWithValue }
  ) => {
    try {
      const state = getState() as RootState; 
      const seatsForShowtime = state.seats[movieId]?.[startTime];

      if (!seatsForShowtime) {
        return rejectWithValue(`Seats not found for movie ID: ${movieId}, startTime: ${startTime}`);
      }

      const updatedSeats = seatsForShowtime.map((seat: any) =>
        ids.includes(seat.seat) ? { ...seat, available: false } : seat
      );

      return { movieId, startTime, updatedSeats };
    } catch (error) {
      console.error('Error updating seat availability:', error);
      return rejectWithValue(error.message || 'An unknown error occurred.');
    }
  }
);

const seatsSlice = createSlice({
  name: 'seats',
  initialState: seats,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSeatAvailability.fulfilled, (state, action) => {
        const { movieId, startTime, updatedSeats } = action.payload;
        if (state[movieId] && state[movieId][startTime]) {
          state[movieId][startTime] = updatedSeats;
        }
      })
      .addCase(updateSeatAvailability.rejected, (state, action) => {
        console.error('Failed to update seat availability:', action.payload);
      });
  },
});

export default seatsSlice.reducer;
