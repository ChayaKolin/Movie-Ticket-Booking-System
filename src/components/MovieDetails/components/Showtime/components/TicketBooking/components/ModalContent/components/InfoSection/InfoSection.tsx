import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';
import { FaFilm, FaClock, FaDollarSign } from 'react-icons/fa';
import { ICON_TYPES, IconType } from '../../../../../../../../../../constants/constants.ts';
import { InfoSectionProps } from './InfoSection.props.ts'; 
import styles from './InfoSection.module.scss';

const InfoSection: React.FC<InfoSectionProps> = ({ icon, label, value }) => {
  const intl = useIntl();

  const iconComponent = useMemo(() => {
    switch (icon) {
      case ICON_TYPES.FILM:
        return <FaFilm className={styles.icon} />;
      case ICON_TYPES.CLOCK:
        return <FaClock className={styles.icon} />;
      case ICON_TYPES.DOLLAR_SIGN:
        return <FaDollarSign className={styles.icon} />;
      default:
        return null;
    }
  }, [icon]);

  return (
    <div className={styles.modalInfo}>
      {iconComponent}
      <p>{intl.formatMessage(label, { value })}</p>
    </div>
  );
};

export default InfoSection;
