import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { makeFilteredMoviesSelector, selectFilters } from '../../redux/selectors/movieSelectors.ts';
import { filterMovies, resetState } from '../../redux/slices/moviesSlice.ts';

export interface FiltersType {
  searchTerm: string;
  selectedGenre: string;
  selectedRating: number;
}

const useFilters = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const initialFilters = useSelector(selectFilters);
  const [filters, setFilters] = useState<FiltersType>(location.state?.filters || initialFilters);
  const filteredMovies = useSelector(makeFilteredMoviesSelector(filters.searchTerm, filters.selectedGenre, filters.selectedRating));

  useEffect(() => {
    if (location.state?.filters) {
      dispatch(filterMovies(filters));
    }
    return () => {
      if (!location.state) dispatch(resetState());
    };
  }, [dispatch, filters, location.state]);

  const handleFilterChange = useCallback((newFilters: FiltersType) => {
    setFilters(newFilters);
    navigate('.', { state: { filters: newFilters } }); 
  }, [navigate]);

  const moviesToDisplay = filteredMovies;

  return { filters, handleFilterChange, moviesToDisplay };
};

export default useFilters;