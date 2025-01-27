import { createSelector } from 'reselect';
import { RootState } from '../../redux/store';
import { GENRES, ALL_RATING } from '../../constants/constants.ts';

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectFilteredMovies = (state: RootState) => state.movies.filteredMovies;
export const selectFilters = (state: RootState) => state.movies.filters;

// Selector to filter movies based on searchTerm, selectedGenre, and selectedRating
export const makeFilteredMoviesSelector = (searchTerm: string, selectedGenre: string, selectedRating: number) => {
  return createSelector(
    [selectMovies],
    (movies) => {
      if (!movies) return [];  
      return movies.filter((movie) => {
        const matchesTitle = !searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGenre = selectedGenre === GENRES.ALL || movie.genre === selectedGenre;
        const matchesRating = selectedRating === ALL_RATING || movie.rating >= selectedRating;
        return matchesTitle && matchesGenre && matchesRating;
      });
    }
  );
};

// Selector to fetch showtimes for a movie from seats.json
export const makeShowtimesSelector = (movieId: string) => createSelector(
  [(state: RootState) => state.seats, (state: RootState) => state.movies.movies],
  (seats, movies) => {
    const movie = movies.find((m) => m.id === Number(movieId));
    if (!movie || !seats[movieId]) return [];
    return Object.keys(seats[movieId]).map((startTime) => ({
      startTime,
      seats: seats[movieId][startTime],
    }));
  }
);

// Selector to get movie details with showtimes
export const makeMovieDetailsWithShowtimesSelector = (movieId: string) => {
  return createSelector(
    [selectMovies, makeShowtimesSelector(movieId)],
    (movies, showtimes) => {
      const movie = movies.find((m) => m.id === Number(movieId));
      return movie ? { ...movie, showtimes } : null;
    }
  );
};
