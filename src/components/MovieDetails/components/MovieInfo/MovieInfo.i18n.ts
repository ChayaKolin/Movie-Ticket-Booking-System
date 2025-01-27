import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  director: {
    id: 'director',
    defaultMessage: 'Director: ',
  },
  releaseDate: {
    id: 'releaseDate',
    defaultMessage: 'Release Date: ',
  },
  genre: {
    id: 'genre',
    defaultMessage: 'Genre: ',
  },
  releaseOn: {
    id: 'releaseOn',
    defaultMessage: 'Released on: {releaseDate}',
  },
  available: {
    id: 'available',
    defaultMessage: 'Available',
  },
  soldOut: {
    id: 'soldOut',
    defaultMessage: 'Sold Out',
  },
  noShowtimes: {
    id: 'noShowtimes',
    defaultMessage: 'No showtimes available',
  },
});
