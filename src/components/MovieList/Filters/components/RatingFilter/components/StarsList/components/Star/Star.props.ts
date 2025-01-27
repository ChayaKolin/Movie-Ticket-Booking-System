export interface StarProps {
    index: number;
    isFilled: boolean;
    isHovered: boolean;
    handleClick: (index: number) => void;
    handleMouseEnter: (index: number) => void;
    handleMouseLeave: () => void;
  }
  