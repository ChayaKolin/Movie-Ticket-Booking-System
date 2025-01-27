export interface FiltersProps {
    filters: { searchTerm: string; selectedGenre: string; selectedRating: number };
    onFilterChange: (filters: FiltersProps['filters']) => void;
    intl: any;
  }
  