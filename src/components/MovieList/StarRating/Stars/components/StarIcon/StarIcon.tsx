import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { STAR_TYPES } from '../../../../../../constants/constants.ts';
import { StarIconProps } from './StarIcon.props.ts';
import styles from './StarIcon.module.scss';

// Map to associate each star type with its corresponding icon
const iconMap = {
  [STAR_TYPES.FULL]: <FaStar className={styles.fullStar} role="img" data-testid="star-FULL" />,
  [STAR_TYPES.HALF]: <FaStarHalfAlt className={styles.halfStar} role="img" data-testid="star-HALF" />,
  [STAR_TYPES.EMPTY]: <FaRegStar className={styles.emptyStar} role="img" data-testid="star-EMPTY" />,
};

const StarIcon: React.FC<StarIconProps> = ({ type }) => {
  // Return the appropriate icon based on the type, or null if not found
  return iconMap[type] || null;
};

export default React.memo(StarIcon);
