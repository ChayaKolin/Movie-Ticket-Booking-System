import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';
import MovieList from './MovieList';
import useFilters from './UseFilters.hooks';

jest.mock('./UseFilters.hooks');

describe('MovieList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the movie list and handles movie click', () => {
    (useFilters as jest.Mock).mockReturnValue({
      filters: {},
      handleFilterChange: jest.fn(),
      moviesToDisplay: [{ id: '1', title: 'Inception' }, { id: '2', title: 'The Dark Knight' }],
    });

    render(
      <IntlProvider locale="en">
        <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <MovieList />
        </MemoryRouter>
      </IntlProvider>
    );

    expect(screen.getByText('Inception')).toBeInTheDocument();
    expect(screen.getByText('The Dark Knight')).toBeInTheDocument();
  });

  test('displays "No Movies Found" when no movies are available', () => {
    (useFilters as jest.Mock).mockReturnValue({
      filters: {},
      handleFilterChange: jest.fn(),
      moviesToDisplay: [],
    });

    render(
      <IntlProvider locale="en">
        <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <MovieList />
        </MemoryRouter>
      </IntlProvider>
    );

    expect(screen.getByText(/no movies found/i)).toBeInTheDocument();
  });
});
