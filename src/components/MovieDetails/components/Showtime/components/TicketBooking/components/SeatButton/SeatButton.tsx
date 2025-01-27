import React, { useMemo } from 'react';
import classNames from 'classnames';
import { FaChair } from 'react-icons/fa';
import { SeatButtonProps } from './SeatButton.props.ts';  
import styles from './SeatButton.module.scss';

const SeatButton: React.FC<SeatButtonProps> = ({ seat, price, available, selected, onClick }) => {
  const seatClass = useMemo(() => {
    return classNames(styles.seat, {
      [styles.available]: available,
      [styles.occupied]: !available,
      [styles.selected]: selected,
    });
  }, [available, selected]);

  return (
    <button
      onClick={onClick}
      className={seatClass}
      disabled={!available}
    >
      <FaChair className={styles.icon} />
      <div className={styles.seatInfo}>
        <span>{seat}</span>
        <span>${price}</span>
      </div>
    </button>
  );
};

export default React.memo(SeatButton);
