export interface StarsListProps {
    totalStars: number;
    isFilled: (index: number) => boolean;
    isHovered: (index: number) => boolean;
    handleClick: (index: number) => void;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
  }
  