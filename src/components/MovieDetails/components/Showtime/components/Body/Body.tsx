import React from 'react';
import { useIntl } from 'react-intl';
import { messages } from './Body.i18n.ts';
import { BodyProps } from './Body.props.ts';
import styles from './Body.module.scss';

const Body: React.FC<BodyProps> = ({
  availableSeats,
  status,
  icon,
  buttonClass,
  buttonDisabled,
  toggleBooking,
}) => {
  const intl = useIntl();

  return (
    <div className={styles.showtimeBody}>
      <p>{intl.formatMessage(messages.availableSeats)}: {availableSeats}</p>
      <div className={styles.status}>
        {icon}
        <span>{status}</span>
      </div>
      <button
        className={`${styles.bookNowButton} ${buttonClass}`}
        onClick={toggleBooking}
        disabled={buttonDisabled}
      >
        {intl.formatMessage(messages.bookNow)}
      </button>
    </div>
  );
};

export default Body;
