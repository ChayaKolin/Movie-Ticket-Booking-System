import React from 'react';
import { NoResultsProps } from './NoResults.props.ts'; 
import { messages } from './NoResults.i18n.ts';
import styles from './NoResults.module.scss';

const NoResults: React.FC<NoResultsProps> = ({ intl }) => {
  return (
    <div className={styles.noResults}>
      <h3>{intl.formatMessage(messages.noMovingFoundTitle)}</h3>
      <p>{intl.formatMessage(messages.noMovingFoundLabel)}</p>
    </div>
  );
};

export default NoResults;
