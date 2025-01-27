import React from 'react';
import { MAX_STARS } from '../../../../../constants/constants.ts';
import { messages } from './RatingFilter.i18n.ts';
import { RatingFilterProps } from './RatingFilterProps.ts';
import { useRating } from './useRating.hooks.ts';
import StarsList from './components/StarsList/StarsList.tsx';
import styles from './RatingFilter.module.scss';

const RatingFilter: React.FC<RatingFilterProps> = ({
  selectedRating,
  onRatingClick,
  intl,
  totalStars = MAX_STARS,
}) => {
  const {
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    isFilled,
    isHovered,
    validTotalStars,
  } = useRating({
    selectedRating,
    totalStars,
    onRatingClick,
  });

  return (
    <div className={styles.ratingFilter}>
      <span className={styles.label}>
        {intl.formatMessage(messages.filterByRating)}
      </span>
      <StarsList
        totalStars={validTotalStars}
        isFilled={isFilled}
        isHovered={isHovered}
        handleClick={handleClick}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

export default RatingFilter;
