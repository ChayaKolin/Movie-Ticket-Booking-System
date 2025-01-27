import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from './SearchInput';
import { SearchInputProps } from './SearchInput.props.ts';
import { messages } from './SearchInput.i18n.ts';
import { IntlProvider } from 'react-intl';

// Mocking the messages object for i18n
const mockMessages = {
    searchPlaceholder: 'Search by title', // Mocking the placeholder text to match what's expected in the component
};

describe('SearchInput Component', () => {
  const mockOnChange = jest.fn();

  const defaultProps: SearchInputProps = {
    value: '',
    onChange: mockOnChange,
    intl: {
      formatMessage: (descriptor) => mockMessages[descriptor.id] || descriptor.defaultMessage,
    },
  };

  it('should render the input element', () => {
    render(<SearchInput {...defaultProps} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('should display the correct placeholder text', () => {
    render(<SearchInput {...defaultProps} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveAttribute('placeholder', 'Search by title'); // Matching the mocked placeholder text
  });

  it('should render with the correct value passed as a prop', () => {
    const value = 'test value';
    render(<SearchInput {...defaultProps} value={value} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(value);
  });
});
