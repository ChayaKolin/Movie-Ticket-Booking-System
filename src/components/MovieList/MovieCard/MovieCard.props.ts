export interface MovieCardProps {
  movie: {
    title: string;
    genre: string;
    image: string;
    rating: number;
    duration: number;
  };
  intl: any;
  onClick: () => void;
}
