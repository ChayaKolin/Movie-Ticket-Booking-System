import React from 'react';
import { render, screen } from '@testing-library/react';
import StarIcon from './StarIcon';
import { STAR_TYPES } from '../../../../../../constants/constants';
import '@testing-library/jest-dom';

describe('StarIcon Component', () => {
  test('renders the correct icon for FULL star type', () => {
    render(<StarIcon type={STAR_TYPES.FULL} />);
    
    const fullStar = screen.getByRole('img');  // Look for the <svg> element
    expect(fullStar).toHaveClass('fullStar');  // Check if it has the correct class
  });

  test('renders the correct icon for HALF star type', () => {
    render(<StarIcon type={STAR_TYPES.HALF} />);
    
    const halfStar = screen.getByRole('img');  // Look for the <svg> element
    expect(halfStar).toHaveClass('halfStar');  // Check if it has the correct class
  });

  test('renders the correct icon for EMPTY star type', () => {
    render(<StarIcon type={STAR_TYPES.EMPTY} />);
    
    const emptyStar = screen.getByRole('img');  // Look for the <svg> element
    expect(emptyStar).toHaveClass('emptyStar');  // Check if it has the correct class
  });

  test('renders nothing when an invalid type is passed', () => {
    render(<StarIcon type="invalidType" />);
    
    const star = screen.queryByRole('img');  // Ensure nothing is rendered for invalid type
    expect(star).toBeNull();  // Should not find any element
  });
});
