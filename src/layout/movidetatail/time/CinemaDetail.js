import React, { useState } from 'react';
import Room from '../../../global/modal/Room';

const CinemaDetail = ({ movieId, data, duration }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [hallid, setHallid] = useState(null);
    const [showtimeId, setShowtimeId] = useState(null);

    const closeModal = () => setIsModalOpen(false);
    const toggleCinemaDetails = () => setOpen(!open);
    const openModal = (id, showId) => {
        setIsModalOpen(true);
        setHallid(id);
        setShowtimeId(showId);
    };
    // Calculate end time based on startTime and duration
    const calculateEndTime = (startTime, duration) => {
        const start = new Date(startTime);
        const end = new Date(start.getTime() + duration * 60 * 1000); // duration in minutes
        return `${end.getHours().toString().padStart(2, '0')}:${end.getMinutes().toString().padStart(2, '0')}`;
    };

    // Group showtimes by type
    const groupShowtimesByType = (showtimes) => {
        return showtimes.reduce((acc, showtime) => {
            const typeName = showtime.type.name;
            if (!acc[typeName]) {
                acc[typeName] = [];
            }
            acc[typeName].push(showtime);
            return acc;
        }, {});
    };

    return (
        <>
            <div>
                <div className="relative mx-0 block py-3 hover:bg-gray-50 md:px-4">
                    <button onClick={toggleCinemaDetails} className="absolute inset-0 block w-full"></button>
                    <div>
                        <div className="rap-detail flex flex-nowrap items-center">
                            {/* <div className="flex-none">
                                <div className="flex h-9 w-9 flex-none items-center justify-center overflow-hidden rounded border border-gray-200 bg-white">
                                    <img
                                        alt={data.name}
                                        src={data.brand.image}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div> */}
                            <div className="min-w-0 flex-1 pl-4">
                                <div className="mb-0 text-md font-semibold leading-tight text-gray-800">
                                    <span>{data.name}</span>
                                </div>
                                <div className="flex flex-nowrap items-center text-tiny text-gray-500">
                                    <div className="truncate">{data.location}</div>
                                    <div className="pl-2">
                                        <a
                                            href={data.map}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block text-blue-500 hover:text-blue-700"
                                        >
                                            [ Bản đồ ]
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden flex-none self-center pl-2 md:block md:pl-5">
                                {open ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon open h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {open && (
                    <div className="opendata">
                        <div className="px-0 pb-5 md:px-4">
                            {(() => {
                                // Group showtimes by type across all halls
                                const groupedShowtimesByType = data.halls.reduce((acc, hall) => {
                                    hall.showtimes.forEach((showtime) => {
                                        const typeName = showtime.type.name;
                                        if (!acc[typeName]) {
                                            acc[typeName] = [];
                                        }
                                        acc[typeName].push({ ...showtime, hallName: hall.name, hallId: hall.id });
                                    });
                                    return acc;
                                }, {});

                                return Object.entries(groupedShowtimesByType).map(([typeName, showtimes]) => (
                                    <div key={typeName} className="mb-5">
                                        <div className="mb-2 text-sm font-bold">{typeName}</div>
                                        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
                                            {showtimes.map((showtime) => {
                                                const endTime = calculateEndTime(showtime.startTime, duration);
                                                const startTime = new Date(showtime.startTime);
                                                const formattedStartTime = `${startTime
                                                    .getHours()
                                                    .toString()
                                                    .padStart(2, '0')}:${startTime
                                                        .getMinutes()
                                                        .toString()
                                                        .padStart(2, '0')}`;
                                                return (
                                                    <div
                                                        key={showtime.id}
                                                        onClick={() => openModal(showtime.hallId, showtime.id)}
                                                        className="tracking-engage-btn-showtime text-tiny group cursor-pointer whitespace-nowrap rounded-md border border-sky-400 bg-sky-100/5 px-2 py-1 text-center text-sky-600 hover:bg-white hover:text-sky-500"
                                                    >
                                                        <strong className="text-md font-semibold">{formattedStartTime}</strong> ~ {endTime}
                                                        {/* <div className="text-xs text-gray-500">{showtime.hallName}</div> */}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ));
                            })()}
                        </div>
                    </div>
                )}

            </div>
            {isModalOpen && <Room cinemaName={data.name} address={data.location} onClose={closeModal} movieId={movieId} hallid={hallid} showtimeId={showtimeId} />}
        </>
    );
};

export default CinemaDetail;
