export interface ModalContentProps {
    movieTitle: string;
    startTime: string;
    selectedSeats: string[];
    seats: { seat: string; price: number }[];
    totalPrice: number;
  }
  