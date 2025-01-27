import { messages } from './MovieInfo.i18n.ts';

interface Movie {
  title: string;
  description: string;
  director: string;
  releaseDate: string;
  genre: string;
  image: string;
}

export const createDetails = (movie: Movie) => [
  { labelId: messages.director.id, defaultMessage: messages.director.defaultMessage, value: movie.director },
  { labelId: messages.releaseDate.id, defaultMessage: messages.releaseDate.defaultMessage, value: movie.releaseDate },
  { labelId: messages.genre.id, defaultMessage: messages.genre.defaultMessage, value: movie.genre },
];