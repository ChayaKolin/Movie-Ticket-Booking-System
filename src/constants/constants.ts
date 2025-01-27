export const MAX_STARS = 5;

export const GENRES = {
  ALL: 'All Geners',
  ACTION: 'Action',
  COMEDY: 'Comedy',
  DRAMA: 'Drama',
  HORROR: 'Horror',
};

export const TIME_DEBOUNCE = 300;

export const ALL_RATING = 0; 

export const SEATS_AVAILABLE = 'Seats Available';
export const SOLD_OUT = 'Sold Out';

export const STAR_TYPES = {
  FULL: 'full',
  HALF: 'half',
  EMPTY: 'empty',
};

export const ICON_TYPES = {
  FILM: 'film',
  CLOCK: 'clock',
  DOLLAR_SIGN: 'dollar-sign',
} as const;

export type IconType = keyof typeof ICON_TYPES;
