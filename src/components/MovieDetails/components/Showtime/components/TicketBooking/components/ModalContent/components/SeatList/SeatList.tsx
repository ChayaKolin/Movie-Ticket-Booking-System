import React, { useMemo } from 'react';
import { FaChair } from 'react-icons/fa';
import { SeatListProps } from './SeatList.props.ts';
import styles from './SeatList.module.scss';

const SeatList: React.FC<SeatListProps> = ({ selectedSeats, seats }) => {
  const seatMap = useMemo(() => new Map(seats.map(({ seat, price }) => [seat, price])), [seats]);

  return (
    <ul className={styles.selectedSeatsList}>
      {selectedSeats.map((seat) => {
        const seatPrice = seatMap.get(seat) ?? 0;
        return (
          <li key={seat} className={styles.selectedSeat}>
            <FaChair className={styles.icon} />
            <span>
              {seat} - ${seatPrice}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default SeatList;
