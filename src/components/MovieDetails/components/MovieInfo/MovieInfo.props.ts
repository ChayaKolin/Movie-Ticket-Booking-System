export interface Movie {
    title: string;
    description: string;
    director: string;
    releaseDate: string;
    genre: string;
    image: string;
  }
  
  export interface MovieInfoProps {
    movie: Movie;
  }
  