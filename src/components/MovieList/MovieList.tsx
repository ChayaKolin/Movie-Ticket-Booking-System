import React from 'react';
import { useIntl } from 'react-intl';
import Filters from './Filters/Filters.tsx';
import MovieCard from './MovieCard/MovieCard.tsx';
import NoResults from './NoResults/NoResults.tsx';
import useFilters from './UseFilters.hooks.ts';
import useMovieClick from './UseMovieClick.hooks.ts';
import styles from './MovieList.module.scss';

const MovieList: React.FC = () => {
  const intl = useIntl();
  const { filters, handleFilterChange, moviesToDisplay } = useFilters();
  const { handleMovieClick } = useMovieClick();

  return (
    <div className={styles.movieCardContaier}>
      <Filters filters={filters} onFilterChange={handleFilterChange} intl={intl} />
      {!moviesToDisplay.length ? (
        <NoResults intl={intl} />
      ) : (
        <div className={styles.movieGrid}>
          {moviesToDisplay.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              intl={intl}
              onClick={() => handleMovieClick(movie.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default (MovieList);