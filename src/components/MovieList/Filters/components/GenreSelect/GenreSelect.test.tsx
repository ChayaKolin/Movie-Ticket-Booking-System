import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import GenreSelect from './GenreSelect';
import { GENRES } from '../../../../../constants/constants.ts';

// Mocked data for props
const mockOnChange = jest.fn();

describe('GenreSelect', () => {
  it('renders the select element with options', () => {
    render(
      <GenreSelect selectedGenre="Action" onChange={mockOnChange} />
    );

    // Check if the select element is rendered
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    // Check if options are rendered based on GENRES
    Object.entries(GENRES).forEach(([key, value]) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });
  });

  it('calls onChange when a genre is selected', () => {
    render(
      <GenreSelect selectedGenre="Action" onChange={mockOnChange} />
    );

    const selectElement = screen.getByRole('combobox');
    // Select 'Action' genre (valid genre in GENRES)
    fireEvent.change(selectElement, { target: { value: 'Action' } });

    expect(mockOnChange).toHaveBeenCalledWith('Action');
  });

  it('shows the selected genre in the select element', () => {
    render(
      <GenreSelect selectedGenre="Action" onChange={mockOnChange} />
    );

    const selectElement = screen.getByRole('combobox');
    expect(selectElement.value).toBe('Action');
  });
});
