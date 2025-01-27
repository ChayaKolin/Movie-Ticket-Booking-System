export interface RatingFilterProps {
    selectedRating: number;
    onRatingClick: (rating: number) => void;
    totalStars?: number;  
    label?: string;  
    intl: any
  }
  