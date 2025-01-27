import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { SEATS_AVAILABLE, SOLD_OUT } from '../../../../constants/constants.ts';
import styles from './Showtime.module.scss';

export const getStatusConfig = (availableSeatsCount: number, allSeatsUnavailable: boolean) => {
  const icon = allSeatsUnavailable
    ? <FaTimesCircle className={`${styles.statusIcon} ${styles.soldOut}`} />
    : <FaCheckCircle className={`${styles.statusIcon} ${styles.available}`} />;
  
  const buttonClass = allSeatsUnavailable ? styles.disabled : styles.enabled;

  return {
    icon,
    buttonClass,
    buttonDisabled: allSeatsUnavailable,
    status: allSeatsUnavailable ? SOLD_OUT : SEATS_AVAILABLE,
    availableSeats: availableSeatsCount,
  };
};
