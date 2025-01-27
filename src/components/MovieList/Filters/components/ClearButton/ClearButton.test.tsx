import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';  // For providing the intl context
import ClearButton from './ClearButton.tsx';
import { messages } from './ClearButton.i18n';  // Import the messages

// Create a simple mock function for onClick
const mockOnClick = jest.fn();

describe('ClearButton', () => {
  it('renders the button with correct text', () => {
    // Render the ClearButton inside an IntlProvider
    render(
      <IntlProvider locale="en" messages={messages}>
        <ClearButton onClick={mockOnClick} intl={{ formatMessage: jest.fn().mockImplementation((msg) => msg.defaultMessage) }} />
      </IntlProvider>
    );

    // Check if the button text is rendered correctly
    expect(screen.getByText('Clear Filters')).toBeInTheDocument();
  });

  it('calls onClick when button is clicked', () => {
    // Render the ClearButton
    render(
      <IntlProvider locale="en" messages={messages}>
        <ClearButton onClick={mockOnClick} intl={{ formatMessage: jest.fn().mockImplementation((msg) => msg.defaultMessage) }} />
      </IntlProvider>
    );

    // Click the button
    fireEvent.click(screen.getByText('Clear Filters'));

    // Assert that the mock function was called
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
