import React from 'react';
import { useMovieDetails } from './UseMovieDetails.hooks.ts';
import MovieInfo from './components/MovieInfo/MovieInfo.tsx';
import Showtime from './components/Showtime/Showtime.tsx';
import { messages } from './MovieDetails.i18n.ts';
import styles from './MovieDetails.module.scss';

const MovieDetails: React.FC = () => {
  const { movie, showtimes, intl } = useMovieDetails();

  if (!movie) {
    return <div>{intl.formatMessage(messages.movieNotFound)}</div>;
  }

  return (
    <div className={styles.movieDetails}>
      <MovieInfo movie={movie}/>
      <div className={styles.showtimeContainer}>
        {showtimes?.length ? (
          showtimes.map((showtime, index) => (
            <Showtime
              key={index}
              showtime={showtime}
              movieId={movie.id}
              movieTitle={movie.title}
            />
          ))
        ) : (
          <div>{intl.formatMessage(messages.noShowtimes)}</div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
