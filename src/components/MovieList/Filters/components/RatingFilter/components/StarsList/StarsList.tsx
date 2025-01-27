import React, { useMemo, useCallback } from 'react';
import Star from './components/Star/Star.tsx';
import { StarsListProps } from './StarsList.props.ts'; 
import styles from './StarsList.module.scss';

const StarsList: React.FC<StarsListProps> = ({
  totalStars,
  isFilled,
  isHovered,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const handleStarClick = useCallback((index: number) => () => handleClick(index), [handleClick]);
  const handleStarMouseEnter = useCallback((index: number) => () => handleMouseEnter(index), [handleMouseEnter]);

  const renderStars = useMemo(
    () =>
      Array.from({ length: totalStars }, (_, index) => (
        <Star
          key={index + 1}
          index={index + 1}
          isFilled={isFilled(index + 1)}
          isHovered={isHovered(index + 1)}
          handleClick={handleStarClick(index + 1)}
          handleMouseEnter={handleStarMouseEnter(index + 1)}
          handleMouseLeave={handleMouseLeave}
        />
      )),
    [totalStars, isFilled, isHovered, handleStarClick, handleStarMouseEnter, handleMouseLeave]
  );

  return <div className={styles.stars}>{renderStars}</div>;
};

export default StarsList;
