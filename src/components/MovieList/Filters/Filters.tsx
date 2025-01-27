import React from 'react';
import SearchInput from './components/SearchInput/SearchInput.tsx';
import ClearButton from './components/ClearButton/ClearButton.tsx';
import GenreSelect from './components/GenreSelect/GenreSelect.tsx';
import RatingFilter from './components/RatingFilter/RatingFilter.tsx';
import useFilters from './useFilters.hooks.ts';
import { FiltersProps } from './Filters.props.ts'; 
import styles from './Filters.module.scss';

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, intl }) => {
  const {
    localSearchTerm,
    handleSearchChange,
    handleGenreChange,
    handleRatingChange,
    handleClearFilters,
    filtersApplied
  } = useFilters(filters, onFilterChange);

  return (
    <div className={styles.filters}>
      <div className={styles.filterRow}>
        <SearchInput value={localSearchTerm} onChange={handleSearchChange} intl={intl} />
        <GenreSelect selectedGenre={filters.selectedGenre} onChange={handleGenreChange} />
        <RatingFilter selectedRating={filters.selectedRating} onRatingClick={handleRatingChange} intl={intl} />
        <ClearButton disabled={!filtersApplied} onClick={handleClearFilters} intl={intl} />
      </div>
    </div>
  );
};

export default Filters;
