import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import { useIntl } from 'react-intl';

// Mocking the intl hook to return a mock formatMessage function
jest.mock('react-intl', () => ({
  useIntl: jest.fn(),
  defineMessages: jest.fn(), // Mock defineMessages to prevent errors
}));

// Mocking the messages import to prevent errors in the test
jest.mock('./Loader.i18n.ts', () => ({
  messages: {
    loading: {
      id: 'loading',
      defaultMessage: 'Loading...',
    },
  },
}));

describe('Loader', () => {
  it('renders the loader component with the correct message', () => {
    // Setting up the mock return value of useIntl
    (useIntl as jest.Mock).mockReturnValue({
      formatMessage: jest.fn().mockImplementation(({ defaultMessage }) => defaultMessage),
    });

    render(<Loader />);

    // Check if the spinner is rendered (use getByTestId)
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    // Check if the loading text is rendered correctly
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  });
});
