export interface SelectedSeatsListProps {
    selectedSeats: string[];
    seats: { seat: string; price: number }[];
    onRemoveSeat: (seat: string) => void;
  }
  