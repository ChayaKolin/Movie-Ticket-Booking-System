import React from 'react';
import { messages } from './ClearButton.i18n.ts';
import { ClearButtonProps } from './ClearButton.props.ts'; 
import styles from './ClearButton.module.scss';

const ClearButton: React.FC<ClearButtonProps> = ({ onClick, intl, disabled }) => (
  <button onClick={onClick} className={styles.clearButton} disabled={disabled}>
    {intl.formatMessage(messages.clearFilters)}
  </button>
);

export default React.memo(ClearButton);
