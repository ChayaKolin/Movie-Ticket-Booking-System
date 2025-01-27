import React from 'react';
import { useIntl } from 'react-intl';
import { messages } from './Loader.i18n.ts';
import styles from './Loader.module.scss';

const Loader: React.FC = () => {
    const intl: any = useIntl();
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <div data-testid="spinner" className={styles.spinner}></div>
        <p className={styles.text}>{intl.formatMessage(messages.loading)}</p>
      </div>
    </div>
  );
};

export default Loader;
   