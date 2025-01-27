import React from 'react';
import { useIntl } from 'react-intl';
import { MAX_STARS } from '../../../constants/constants.ts';
import Stars from './Stars/Stars.tsx';
import { messages } from './StarRating.i18n.ts';
import { StarRatingProps } from './StarRating.props.ts'; 
import styles from './StarRating.module.scss';

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
  const intl = useIntl();

  return (
    <div className={styles.starRating}>
      {intl.formatMessage(messages.starRatingLabel)}
      <Stars rating={rating} maxStars={MAX_STARS} />
    </div>
  );
};

export default React.memo(StarRating);
