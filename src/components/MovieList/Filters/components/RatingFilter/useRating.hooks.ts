import { useState, useMemo, useCallback } from 'react';
import { MAX_STARS } from '../../../../../constants/constants.ts';

interface UseRatingProps {
  selectedRating: number;
  totalStars: number;
  onRatingClick: (rating: number) => void;
}

interface UseRatingReturn {
  hoveredRating: number | null;
  handleMouseEnter: (rating: number) => void;
  handleMouseLeave: () => void;
  handleClick: (rating: number) => void;
  isFilled: (index: number) => boolean;
  isHovered: (index: number) => boolean;
  validTotalStars: number;
}

export const useRating = ({
  selectedRating,
  onRatingClick,
  totalStars = MAX_STARS,
}: UseRatingProps): UseRatingReturn => {
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const validTotalStars = useMemo(() => Math.min(totalStars, MAX_STARS), [totalStars]);

  const handleMouseEnter = useCallback((rating: number) => {
    setHoveredRating(rating);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredRating(null);
  }, []);

  const handleClick = useCallback(
    (rating: number) => {
      onRatingClick(rating);
    },
    [onRatingClick]
  );

  const isFilled = (index: number) => index <= selectedRating;

  const isHovered = (index: number) => index <= (hoveredRating || selectedRating);

  return {
    hoveredRating,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
    isFilled,
    isHovered,
    validTotalStars,
  };
};
