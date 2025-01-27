import { render, screen } from '@testing-library/react';
import MovieDetailItem from './MovieDetailItem';
import { IntlProvider } from 'react-intl';
import { MovieDetailItemProps } from './MovieDetailItem.props.ts';

const messages = {
  'movie.title': 'Movie Title',
  'movie.director': 'Director',
};

describe('MovieDetailItem Component', () => {
  const defaultProps: MovieDetailItemProps = {
    labelId: 'movie.title',
    defaultMessage: 'Title',
    value: 'Inception',
  };

  const renderWithIntl = (props: MovieDetailItemProps) => {
    return render(
      <IntlProvider locale="en" messages={messages}>
        <MovieDetailItem {...props} />
      </IntlProvider>
    );
  };

  it('should render the label correctly', () => {
    renderWithIntl(defaultProps);
    const labelElement = screen.getByText('Movie Title'); // From the mock messages
    expect(labelElement).toBeInTheDocument();
  });

  it('should render the value correctly', () => {
    renderWithIntl(defaultProps);
    const valueElement = screen.getByText('Inception'); // From the defaultProps value
    expect(valueElement).toBeInTheDocument();
  });

  it('should render the default message when labelId is not found in messages', () => {
    const props = { ...defaultProps, labelId: 'movie.unknown' };
    renderWithIntl(props);
    const labelElement = screen.getByText('Title'); // Default message from props
    expect(labelElement).toBeInTheDocument();
  });
});
