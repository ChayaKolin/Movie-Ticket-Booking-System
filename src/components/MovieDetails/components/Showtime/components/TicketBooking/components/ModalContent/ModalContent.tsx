import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { ICON_TYPES } from '../../../../../../../../constants/constants.ts';
import SeatList from './components/SeatList/SeatList.tsx';
import InfoSection from './components/InfoSection/InfoSection.tsx';
import { messages } from './ModalContent.i18n.ts';
import { ModalContentProps } from './ModalContent.props.ts'; 
import styles from './ModalContent.module.scss';

const ModalContent: React.FC<ModalContentProps> = ({
  movieTitle,
  startTime,
  selectedSeats,
  seats,
  totalPrice,
}) => {
  const intl = useIntl();
  const infoSections = useMemo(
    () => [
      { icon: ICON_TYPES.FILM, label: messages.ticketBookingMovie, value: movieTitle },
      { icon: ICON_TYPES.CLOCK, label: messages.ticketBookingShowtime, value: startTime },
      { icon: ICON_TYPES.DOLLAR_SIGN, label: messages.ticketBookingTotalPrice, value: totalPrice },
    ],
    [movieTitle, startTime, totalPrice] 
  );

  return (
    <div className={styles.modalContent}>
      <h3>{intl.formatMessage(messages.ticketBookingBookingSummary)}</h3>
      {infoSections.map(({ icon, label, value }) => (
        <InfoSection key={icon} icon={icon} label={label} value={value} />
      ))}

      <h4>{intl.formatMessage(messages.ticketBookingSelectedSeats)}</h4>
      <SeatList selectedSeats={selectedSeats} seats={seats} />
    </div>
  );
};

export default ModalContent;
