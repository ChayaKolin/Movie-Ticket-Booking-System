import React from 'react';
import { useIntl } from 'react-intl';
import { MovieDetailItemProps } from './MovieDetailItem.props.ts';
import styles from './MovieDetailItem.module.scss';

const MovieDetailItem: React.FC<MovieDetailItemProps> = ({ labelId, defaultMessage, value }) => {
  const intl = useIntl();

  return (
    <div className={styles.detailItem}>
      <strong>{intl.formatMessage({ id: labelId, defaultMessage })}</strong> <span>{value}</span>
    </div>
  );
};

export default React.memo(MovieDetailItem);
