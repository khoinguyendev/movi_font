import React, { useEffect } from 'react';
import { io } from 'socket.io-client';
import { port } from '../../port/config';

const socket = io(`${port.ip}`); // Connect to the backend server

const Seat = ({ diagram, toggleSeat, places, placesBooked, setPlacesBooked, showtimeId }) => {

    useEffect(() => {
        // Listen for ticket updates (ticketBooked event)
        socket.on('ticketBooked', (ticket) => {
            if (ticket.showtime.id === showtimeId) {
                // Only update state if the ticket is for the current showtime
                setPlacesBooked((prev) => [...prev, ticket]);
            }
        });

        // Cleanup on component unmount
        return () => {
            socket.off('ticketBooked'); // Unsubscribe from event
        };
    }, [setPlacesBooked]); // Dependency array ensures it's set up correctly

    return (
        <>
            {diagram.map((row, rowIndex) => (
                <div className="cinema-seat-row" key={rowIndex} style={{ display: 'flex' }}>
                    {row.map((item, colIndex) => {
                        const seat = item;
                        const isSelected = places.some((book) => book.seatNumber === seat.seatNumber);
                        const isBooked = placesBooked.some((book) => book.seat.seatNumber === seat.seatNumber);

                        if (seat.seatNumber === '0') {
                            return <div key={`${rowIndex}-${colIndex}`} style={{ width: '36px' }} />;
                        }

                        if (isBooked) {
                            return (
                                <button
                                    key={seat.seatNumber}
                                    className="cinema-seat-item !pointer-events-none !bg-gray-700"
                                    style={{ backgroundColor: 'rgb(245, 34, 45)' }}
                                >
                                    <span>{seat.seatNumber}</span>
                                </button>
                            );
                        }

                        return (
                            <button
                                key={seat.id}
                                onClick={() => toggleSeat({ id: seat.id, seatNumber: seat.seatNumber })}
                                className={`cinema-seat-item ${isSelected ? '!border-white !bg-pink-600 !opacity-100' : ''}`}
                                style={{
                                    backgroundColor: 'rgb(114, 46, 209)', // Default color
                                }}
                            >
                                <span>{seat.seatNumber}</span>
                            </button>
                        );
                    })}
                </div>
            ))}

        </>
    );
};

export default Seat;
