import { useState, useMemo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateSeatAvailability } from '../../../../../../redux/slices/seatsSlice.ts';

export const useSeatSelection = (
    seats: { seat: string; price: number; }[],
    movieId: string,
    startTime: string
) => {

    // If the state management becomes more complex with additional states, 
    // it is recommended to switch to useReducer for better maintainability and clarity.
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const totalPrice = useMemo(() => {
        return selectedSeats.reduce((acc, seat) => {
            const seatInfo = seats.find((s) => s.seat === seat);
            return acc + (seatInfo?.price || 0);
        }, 0);
    }, [selectedSeats, seats]);

    const handleSeatSelect = useCallback(
        (seat: string) => {
            setSelectedSeats((prev) =>
                prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
            );
        },
        []
    );

    const handleRemoveSeat = useCallback((seat: string) => {
        setSelectedSeats((prev) => prev.filter((s) => s !== seat));
    }, []);

    const dispatch = useDispatch();

    const handleFinalConfirm = useCallback(() => {
        if (selectedSeats.length) {
            dispatch(updateSeatAvailability({ movieId, startTime, ids: selectedSeats }));
            setIsBookingModalOpen(true);
        }
    }, [dispatch, selectedSeats, movieId, startTime]);

    return { selectedSeats, handleSeatSelect, handleRemoveSeat, totalPrice, handleFinalConfirm, isBookingModalOpen, setIsBookingModalOpen };
};
