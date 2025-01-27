import { render, fireEvent } from '@testing-library/react';
import StarsList from './StarsList'; // Adjust the path to your StarsList component
import { StarsListProps } from './StarsList.props'; // Adjust the path to the props file

describe('StarsList Component', () => {
  const mockHandleClick = jest.fn();
  const mockHandleMouseEnter = jest.fn();
  const mockHandleMouseLeave = jest.fn();
  const mockIsFilled = jest.fn((index: number) => index <= 3); // Example: stars 1 to 3 are filled
  const mockIsHovered = jest.fn((index: number) => index <= 2); // Example: stars 1 and 2 are hovered

  const defaultProps: StarsListProps = {
    totalStars: 5,
    isFilled: mockIsFilled,
    isHovered: mockIsHovered,
    handleClick: mockHandleClick,
    handleMouseEnter: mockHandleMouseEnter,
    handleMouseLeave: mockHandleMouseLeave,
  };

  it('should render the correct number of stars', () => {
    const { getAllByTestId } = render(<StarsList {...defaultProps} />);
    const stars = getAllByTestId('star'); // Assuming each Star component has a data-testid="star"
    expect(stars.length).toBe(5);
  });

  it('should call handleClick when a star is clicked', () => {
    const { getAllByTestId } = render(<StarsList {...defaultProps} />);
    const star = getAllByTestId('star')[2]; // Click on the 3rd star (index 2)
    fireEvent.click(star);
    expect(mockHandleClick).toHaveBeenCalledWith(3); // Assuming star index starts from 1
  });

  it('should call handleMouseEnter when a star is hovered', () => {
    const { getAllByTestId } = render(<StarsList {...defaultProps} />);
    const star = getAllByTestId('star')[1]; // Hover over the 2nd star (index 1)
    fireEvent.mouseEnter(star);
    expect(mockHandleMouseEnter).toHaveBeenCalledWith(2);
  });

  it('should call handleMouseLeave when mouse leaves a star', () => {
    const { getAllByTestId } = render(<StarsList {...defaultProps} />);
    const star = getAllByTestId('star')[1]; // Mouse leave the 2nd star (index 1)
    fireEvent.mouseLeave(star);
    expect(mockHandleMouseLeave).toHaveBeenCalled();
  });
});
