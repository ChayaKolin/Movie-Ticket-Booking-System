import React from 'react';
import { HeaderProps } from './Header.props.ts'; 
import styles from './Header.module.scss';

const Header: React.FC<HeaderProps> = ({ theater, formattedStartTime }) => (
  <div className={styles.showtimeHeader}>
    <h3>{theater}</h3>
    <p>{formattedStartTime}</p>
  </div>
);

export default Header;
