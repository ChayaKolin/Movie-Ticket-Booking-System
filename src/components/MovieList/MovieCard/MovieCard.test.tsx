import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import MovieCard from './MovieCard';
import { messages } from './MovieCard.i18n';

const movie = {
  title: 'Inception',
  genre: 'Sci-Fi',
  image: 'https://example.com/inception.jpg',
  rating: 4.5,
  duration: 148,
};

const renderWithIntl = (ui: React.ReactElement) => {
  return render(
    <IntlProvider locale="en" messages={messages}>
      {ui}
    </IntlProvider>
  );
};

describe('MovieCard', () => {
  it('renders movie title, genre, and duration', () => {
    // Mocking intl.formatMessage to return static text
    const formatMessageMock = jest.fn().mockImplementation((message) => {
      switch (message.id) {
        case 'movieCardGenre':
          return 'Genre: ';
        case 'movieCardDuration':
          return 'Duration: 02:28 hours';
        default:
          return '';
      }
    });

    renderWithIntl(
      <MovieCard movie={movie} intl={{ formatMessage: formatMessageMock }} onClick={jest.fn()} />
    );

    const titleElement = screen.getByText(movie.title);
    expect(titleElement).toBeInTheDocument();

    const genreElement = screen.getByText('Genre: Sci-Fi');
    expect(genreElement).toBeInTheDocument();

    const durationElement = screen.getByText('Duration: 02:28 hours');
    expect(durationElement).toBeInTheDocument();
  });

  it('renders the correct duration label from intl', () => {
    const formatMessageMock = jest.fn().mockImplementation(() => 'Duration: 02:28 hours');

    renderWithIntl(<MovieCard movie={movie} intl={{ formatMessage: formatMessageMock }} onClick={jest.fn()} />);

    const durationLabel = screen.getByText('Duration: 02:28 hours');
    expect(durationLabel).toBeInTheDocument();
  });
});
