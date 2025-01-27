export interface Seat {
    seat: string;
    available: boolean;
    price: number;
  }
  
  export interface TicketBookingProps {
    seats: Seat[];
    startTime: string;
    movieId: string;
    movieTitle: string;
  }
  