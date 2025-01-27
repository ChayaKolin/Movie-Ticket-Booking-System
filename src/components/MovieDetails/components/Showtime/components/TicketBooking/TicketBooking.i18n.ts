import { defineMessages } from 'react-intl';

export const messages = defineMessages({
  ticketBookingTitle: {
    id: 'ticketBooking.title',
    defaultMessage: 'Ticket Booking for {time}',
  },
  ticketBookingSelectedSeats: {
    id: 'ticketBooking.selectedSeats',
    defaultMessage: 'Selected Seats',
  },
  ticketBookingNoSeats: {
    id: 'ticketBooking.noSeats',
    defaultMessage: 'No seats selected',
  },
  ticketBookingTotalPrice: {
    id: 'ticketBooking.totalPrice',
    defaultMessage: 'Total Price: ${total}',
  },
  ticketBookingFinalConfirm: {
    id: 'ticketBooking.finalConfirm',
    defaultMessage: 'Confirm Booking',
  },
});