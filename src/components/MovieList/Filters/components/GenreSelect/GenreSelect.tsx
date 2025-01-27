import React from 'react';
import { GENRES } from '../../../../../constants/constants.ts';
import { GenreSelectProps } from './GenreSelect.props.ts'; 
import styles from './GenreSelect.module.scss';

const GenreSelect: React.FC<GenreSelectProps> = ({ selectedGenre, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <select
      value={selectedGenre}
      onChange={handleChange}
      className={styles.selectGenere}
    >
      {Object.entries(GENRES).map(([key, value]) => (
        <option key={key} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default React.memo(GenreSelect);
