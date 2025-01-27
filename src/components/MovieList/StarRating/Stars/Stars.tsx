import React, { useMemo, useCallback } from 'react';
import { STAR_TYPES } from '../../../../constants/constants.ts';
import StarIcon from './components/StarIcon/StarIcon.tsx';
import { StarsProps } from './Stars.props.ts';
import styles from './Stars.module.scss';

const Stars: React.FC<StarsProps> = ({ rating, maxStars }) => {
  const getStarType = useCallback((starIndex: number) => {
    if (starIndex <= rating) return STAR_TYPES.FULL;
    if (starIndex - rating < 1) return STAR_TYPES.HALF;
    return STAR_TYPES.EMPTY;
  }, [rating]);

  const stars = useMemo(() => {
    return Array.from({ length: maxStars }, (_, i) => ({
      type: getStarType(i + 1),
      key: i,
    }));
  }, [maxStars, getStarType]);

  return (
    <div data-testid="stars" className={styles.starsContainer}>
      {stars.map(({ type, key }) => (
        <StarIcon
        key={key} 
        type={type}
          />
      ))}
    </div>
  );
};

export default Stars;
