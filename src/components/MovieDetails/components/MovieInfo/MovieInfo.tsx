import React, { useMemo } from 'react';
import MovieDetailItem from './components/MovieDetailItem/MovieDetailItem.tsx';
import { createDetails } from './MovieInfo.utils.ts';
import { MovieInfoProps } from './MovieInfo.props.ts'; 
import styles from './MovieInfo.module.scss';

const MovieInfo: React.FC<MovieInfoProps> = ({ movie }) => {
   const details = useMemo(() => createDetails(movie), [movie]);

  return (
    <div className={styles.movieInfo}>
      <img className={styles.poster} src={movie.image} alt={movie.title} />
      <h1 className={styles.title}>{movie.title}</h1>
      <p className={styles.description}>{movie.description}</p>

      <div className={styles.details}>
        {details.map((detail) => (
          <MovieDetailItem key={detail.labelId} labelId={detail.labelId} defaultMessage={detail.defaultMessage} value={detail.value} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(MovieInfo);
