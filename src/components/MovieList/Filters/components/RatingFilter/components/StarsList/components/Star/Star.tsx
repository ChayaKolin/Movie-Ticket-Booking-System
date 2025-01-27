import React, { useCallback } from 'react';
import classNames from 'classnames';
import { StarProps } from './Star.props.ts';
import styles from './Star.module.scss';

const Star: React.FC<StarProps> = ({
  index,
  isFilled,
  isHovered,
  handleClick,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const onClick = useCallback(() => handleClick(index), [handleClick, index]);
  const onMouseEnter = useCallback(() => handleMouseEnter(index), [handleMouseEnter, index]);

  return (
    <span
      data-testid="star"
      className={classNames(
        styles.star,
        { [styles.filled]: isFilled },
        { [styles.hovered]: isHovered }
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      &#9733;
    </span>
  );
};

export default React.memo(Star);
