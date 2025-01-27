export interface ShowtimeProps {
    showtime: {
      theater: string;
      startTime: string;
      availableSeats: number;
      status: string;
    };
    movieId: string;
    movieTitle: string;
  }
  