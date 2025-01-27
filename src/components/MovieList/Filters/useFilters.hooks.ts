import { useState, useCallback, useEffect } from 'react';
import useDebouncedCallback from '../../../hooks/UseDebouncedSearch.hooks.ts';
import { GENRES } from '../../../constants/constants.ts';

const useFilters = (initialFilters: { searchTerm: string; selectedGenre: string; selectedRating: number }, onFilterChange: (filters: { searchTerm: string; selectedGenre: string; selectedRating: number }) => void) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(initialFilters.searchTerm);
  const [filtersApplied, setFiltersApplied] = useState(false);

  useEffect(() => {
    const isFiltersChanged = 
      initialFilters.searchTerm !== '' || 
      initialFilters.selectedGenre !== GENRES.ALL || 
      initialFilters.selectedRating !== 0;
    setFiltersApplied(isFiltersChanged);
  }, [initialFilters, localSearchTerm]);

  const handleDebouncedSearch = useDebouncedCallback(
    (value: string) => {
      onFilterChange({ ...initialFilters, searchTerm: value });
    },
    [initialFilters, onFilterChange]
  );

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLocalSearchTerm(value);
    handleDebouncedSearch(value);
  }, [handleDebouncedSearch]);

  const handleGenreChange = useCallback((genre: string) => {
    onFilterChange({ ...initialFilters, selectedGenre: genre });
  }, [initialFilters, onFilterChange]);

  const handleRatingChange = useCallback((rating: number) => {
    onFilterChange({ ...initialFilters, selectedRating: rating });
  }, [initialFilters, onFilterChange]);

  const handleClearFilters = useCallback(() => {
    onFilterChange({ searchTerm: '', selectedGenre: GENRES.ALL, selectedRating: 0 });
    setLocalSearchTerm('');
  }, [onFilterChange]);

  return {
    localSearchTerm,
    handleSearchChange,
    handleGenreChange,
    handleRatingChange,
    handleClearFilters,
    setLocalSearchTerm,
    filtersApplied
  };
};

export default useFilters;