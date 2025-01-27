import { createSlice } from '@reduxjs/toolkit';
import moviesData from '../../mockData/movies.json';
import { GENRES, ALL_RATING } from '../../constants/constants.ts';

const initialState = {
  movies: moviesData, // mock data as initial state
  filteredMovies: moviesData, // initial filteredMovies to show all
  filters: {
    searchTerm: '',
    selectedGenre: GENRES.ALL,
    selectedRating: ALL_RATING,
  },
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    filterMovies: (state, action) => {
      const { searchTerm, selectedGenre, selectedRating } = action.payload;
      state.filters = { searchTerm, selectedGenre, selectedRating };
      state.filteredMovies = state.movies.filter((movie) => {
        const matchesTitle = !searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === GENRES.ALL || movie.genre === selectedGenre;
        const matchesRating = selectedRating === ALL_RATING || movie.rating >= selectedRating;
        return matchesTitle && matchesGenre && matchesRating;
      });
    },
    resetState: (state) => {
      state.filteredMovies = state.movies;
      state.filters = {
        searchTerm: '',
        selectedGenre: GENRES.ALL,
        selectedRating: ALL_RATING,
      };
    },
  },
});

export const { filterMovies, resetState } = moviesSlice.actions;

export default moviesSlice.reducer;
