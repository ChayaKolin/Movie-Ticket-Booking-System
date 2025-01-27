import React, { useMemo } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { SEAT_NOT_AVAILABLE } from './SelectedSeatsList.constants.ts';
import { SelectedSeatsListProps } from './SelectedSeatsList.props.ts'; 
import styles from './SelectedSeatsList.module.scss';

const SelectedSeatsList: React.FC<SelectedSeatsListProps> = ({ selectedSeats, seats, onRemoveSeat }) => {
  const seatPriceMap = useMemo(() => {
    return seats.reduce((acc, { seat, price }) => {
      acc[seat] = price;
      return acc;
    }, {} as Record<string, number>);
  }, [seats]);

  return (
    <ul className={styles.selectedSeatsList}>
      {selectedSeats.map((seat) => {
        const price = seatPriceMap[seat];
        return (
          <li key={seat} className={styles.selectedSeat}>
            <span>{seat} - ${price ?? SEAT_NOT_AVAILABLE}</span>
            <button className={styles.removeButton} onClick={() => onRemoveSeat(seat)}>
              <FaTrashAlt />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectedSeatsList;
