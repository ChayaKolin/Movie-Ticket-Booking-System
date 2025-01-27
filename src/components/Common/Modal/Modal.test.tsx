import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';
import { MODAL_SIZES } from './Modal.constants.ts';

// Mocking styles import
jest.mock('./Modal.module.scss', () => ({
  overlay: 'overlay',
  modalContent: 'modalContent',
  closeButton: 'closeButton',
  small: 'small',   // Add the small class
  medium: 'medium', // Add the medium class
  large: 'large',   // Add the large class
}));

// Mocking the useModal hook
jest.mock('./UseModal.hooks.ts', () => ({
  useModal: jest.fn().mockReturnValue({}),
}));

describe('Modal', () => {
  it('renders modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={jest.fn()}>
        <div>Test Modal Content</div>
      </Modal>
    );

    // Check if modal content is rendered
    const modalContent = screen.getByText('Test Modal Content');
    expect(modalContent).toBeInTheDocument();

    // Check if the close button is rendered
    const closeButton = screen.getByText('X');
    expect(closeButton).toBeInTheDocument();
  });

  it('does not render modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={jest.fn()}>
        <div>Test Modal Content</div>
      </Modal>
    );

    // Check that modal content is not rendered
    const modalContent = screen.queryByText('Test Modal Content');
    expect(modalContent).not.toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock}>
        <div>Test Modal Content</div>
      </Modal>
    );

    // Simulate clicking the close button
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);

    // Check if the onClose function is called
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
