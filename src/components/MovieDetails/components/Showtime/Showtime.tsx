import React, { useState, useMemo } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { getSeatsByMovieAndTime } from '../../../../redux/selectors/setsSelectors.ts';
import { MODAL_SIZES } from '../../../Common/Modal/Modal.constants.ts';
import Modal from '../../../Common/Modal/Modal.tsx';
import { getStatusConfig } from './StatusConfig.tsx';
import TicketBooking from './components/TicketBooking/TicketBooking.tsx';
import Header from './components/Header/Header.tsx';
import Body from './components/Body/Body.tsx';
import { ShowtimeProps } from './Showtime.props.ts';
import styles from './Showtime.module.scss';

const Showtime: React.FC<ShowtimeProps> = ({ showtime, movieId, movieTitle }) => {
  const seats = useSelector((state: RootState) => getSeatsByMovieAndTime(movieId, showtime.startTime)(state));
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const formattedStartTime = useMemo(() => moment(showtime.startTime).format('LLL'), [showtime.startTime]);
  const availableSeatsCount = useMemo(() => seats.filter((seat) => seat.available).length, [seats]);
  const allSeatsUnavailable = useMemo(() => !seats.some((seat) => seat.available), [seats]);
  const { icon, buttonClass, buttonDisabled, status } = getStatusConfig(availableSeatsCount, allSeatsUnavailable);

  const toggleBooking = () => {
    setIsBookingOpen(prev => !prev);
  };

  return (
    <div className={`${styles.showtimeItem} ${isBookingOpen ? styles.expanded : ''}`}>
      <Header theater={showtime.theater} formattedStartTime={formattedStartTime} />
      <Body
        availableSeats={availableSeatsCount}
        status={status}
        icon={icon}
        buttonClass={buttonClass}
        buttonDisabled={buttonDisabled}
        toggleBooking={toggleBooking}
      />
      {isBookingOpen && (
        <Modal isOpen={isBookingOpen} onClose={toggleBooking} size={MODAL_SIZES.LARGE}>
          <TicketBooking startTime={showtime.startTime} movieId={movieId} seats={seats} movieTitle={movieTitle} />
        </Modal>
      )}
    </div>
  );
};

export default Showtime;
