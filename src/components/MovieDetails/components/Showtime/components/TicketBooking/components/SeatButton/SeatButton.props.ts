export interface SeatButtonProps {
    seat: string;
    price: number;
    available: boolean;
    selected: boolean;
    onClick: () => void;
  }
  