import React from 'react';

export interface BodyProps {
  availableSeats: number;
  status: string;
  icon: React.ReactNode;
  buttonClass: string;
  buttonDisabled: boolean;
  toggleBooking: (e: React.MouseEvent) => void;
}
