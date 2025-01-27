import React, { useMemo } from 'react';
import moment from 'moment';
import StarRating from '../StarRating/StarRating.tsx';
import { MovieCardProps } from './MovieCard.props.ts'; 
import { messages } from './MovieCard.i18n.ts';
import styles from './MovieCard.module.scss';

const MovieCard: React.FC<MovieCardProps> = ({ movie = {}, intl, onClick }) => {
  const { title = '', genre = '', image = '', rating = 0, duration = 0 } = movie;

  const formattedDuration = useMemo(() => moment.utc(duration * 60000).format('HH:mm'), [duration]);

  return (
    <div className={styles.movieCard} onClick={onClick}>
      <img src={image} alt={`Poster for ${title}`} className={styles.movieImage} />
      <div className={styles.movieDetails}>
        <h3>{title}</h3>
        <p>{intl.formatMessage(messages.movieCardGenre)} {genre}</p>
        <StarRating rating={rating} />
        <p>
          {intl.formatMessage(messages.movieCardDuration, { duration: formattedDuration })}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
