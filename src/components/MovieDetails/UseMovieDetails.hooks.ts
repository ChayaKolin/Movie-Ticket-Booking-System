import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { makeMovieDetailsWithShowtimesSelector } from '../../redux/selectors/movieSelectors.ts';

export const useMovieDetails = () => {
  const { movieId } = useParams();
  const intl = useIntl();

  // Fetch movie details and showtimes using a selector
  const movieDetailsSelector = makeMovieDetailsWithShowtimesSelector(movieId);
  const movieDetails = useSelector(movieDetailsSelector);

  return {
    movie: movieDetails,
    showtimes: movieDetails?.showtimes,
    intl,
  };
};
