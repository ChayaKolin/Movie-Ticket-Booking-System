import React from 'react';
import { render, screen } from '@testing-library/react';
import Stars from './Stars';  
import { STAR_TYPES } from '../../../../constants/constants';
import '@testing-library/jest-dom';

describe('Stars Component', () => {
  test('renders the correct number of filled stars based on the rating', () => {
    const rating = 3;
    const maxStars = 5;

    render(<Stars rating={rating} maxStars={maxStars} />);

    // Check that the correct number of filled stars are rendered
    const filledStars = screen.getAllByTestId('star-FULL');
    expect(filledStars).toHaveLength(rating);

    // Check that the remaining stars are empty
    const emptyStars = screen.getAllByTestId('star-EMPTY');
    expect(emptyStars).toHaveLength(maxStars - rating);
  });

  test('handles a rating of 0 correctly', () => {
    const rating = 0;
    const maxStars = 5;

    render(<Stars rating={rating} maxStars={maxStars} />);

    const filledStars = screen.queryAllByTestId('star-FULL');
    const emptyStars = screen.getAllByTestId('star-EMPTY');

    expect(filledStars).toHaveLength(0);  // No filled stars
    expect(emptyStars).toHaveLength(maxStars);  // All stars are empty
  });

  test('handles half-star ratings correctly', () => {
    const rating = 2.5;
    const maxStars = 5;

    render(<Stars rating={rating} maxStars={maxStars} />);

    const halfStars = screen.getAllByTestId('star-HALF');
    const filledStars = screen.getAllByTestId('star-FULL');
    const emptyStars = screen.getAllByTestId('star-EMPTY');

    expect(halfStars).toHaveLength(1);  // One half star
    expect(filledStars).toHaveLength(2);  // Two full stars
    expect(emptyStars).toHaveLength(2);  // Two empty stars
  });
});
