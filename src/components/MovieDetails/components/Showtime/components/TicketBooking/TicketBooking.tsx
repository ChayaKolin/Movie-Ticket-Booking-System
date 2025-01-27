import React from 'react';
import { useIntl } from 'react-intl';
import { FaChair, FaDollarSign, FaTicketAlt } from 'react-icons/fa';
import { MODAL_SIZES } from '../../../../../Common/Modal/Modal.constants.ts';
import Modal from '../../../../../Common/Modal/Modal.tsx';
import SeatButton from './components/SeatButton/SeatButton.tsx';
import SelectedSeatsList from './components/SelectedSeatsList/SelectedSeatsList.tsx';
import ModalContent from './components/ModalContent/ModalContent.tsx';
import { messages } from './TicketBooking.i18n.ts';
import { useSeatSelection } from './useSeatSelection.hooks.ts';
import { TicketBookingProps } from './TicketBooking.props.ts'; 
import styles from './TicketBooking.module.scss';

const TicketBooking: React.FC<TicketBookingProps> = ({ seats, startTime, movieId, movieTitle }) => {
  const { selectedSeats, handleSeatSelect, handleRemoveSeat, totalPrice, handleFinalConfirm, isBookingModalOpen, setIsBookingModalOpen } = useSeatSelection(seats, movieId, startTime);

  const intl = useIntl();
  return (
    <div className={styles.ticketBooking}>
      <h3>{intl.formatMessage(messages.ticketBookingTitle, { time: startTime })}</h3>

      <div className={styles.seatMap}>
        {seats.map(({ seat, price, available }) => (
          <SeatButton
            key={seat}
            seat={seat}
            price={price}
            available={available}
            selected={selectedSeats.includes(seat)}
            onClick={() => handleSeatSelect(seat)}
          />
        ))}
      </div>

      <div className={styles.summary}>
        <h4><FaTicketAlt className={styles.icon} /> {intl.formatMessage(messages.ticketBookingSelectedSeats)}</h4>
        {selectedSeats.length ? (
          <SelectedSeatsList selectedSeats={selectedSeats} seats={seats} onRemoveSeat={handleRemoveSeat} />
        ) : (
          <p><FaChair className={styles.icon} /> {intl.formatMessage(messages.ticketBookingNoSeats)}</p>
        )}
        <p><FaDollarSign className={styles.icon} /> {intl.formatMessage(messages.ticketBookingTotalPrice, { total: totalPrice })}</p>
        <button
          disabled={!selectedSeats.length}
          className={styles.ticketBookingFinalConfirm}
          onClick={handleFinalConfirm}
        >
          {intl.formatMessage(messages.ticketBookingFinalConfirm)}
        </button>
      </div>

      <Modal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} size={MODAL_SIZES.LARGE}>
        <ModalContent movieTitle={movieTitle} startTime={startTime} selectedSeats={selectedSeats} seats={seats} totalPrice={totalPrice} />
      </Modal>
    </div>
  );
};

export default TicketBooking;
