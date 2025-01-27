import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useDispatch } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';
import { resetState } from '../../redux/slices/moviesSlice.ts';
import { messages } from './Navbar.i18n.ts';
import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    dispatch(resetState());
  };

  const handleBackClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    navigate(-1); // Navigate back one step in history
  };

  const backButtonClass = `${styles.backButton} ${location.pathname === '/' ? styles.disabled : ''}`;

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={handleHomeClick}>
        {intl.formatMessage(messages.movieBooking)}
      </Link>
      <a
        href="#"
        className={backButtonClass}
        onClick={handleBackClick}
      >
        <FaArrowLeft className={styles.backIcon} />
        {intl.formatMessage(messages.movieBack)}
      </a>
    </nav>
  );
};

export default Navbar;