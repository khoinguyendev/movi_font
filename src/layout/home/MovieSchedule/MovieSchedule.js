import React from 'react';
import Location from './Location';
import ListCinema from './ListCinema';

const MovieSchedule = () => {
    return (
        <section className="scroll-margin-top bg-gray-50 py-8 md:py-10 lg:py-14" id="cumrap">
            <div className="mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8">
                <div className="mb-5 text-center md:mb-8">
                    <h2 className="text-2xl font-bold text-pink-600 lg:text-3xl">Lịch chiếu phim</h2>
                </div>
                <div className="md:shadow-soju1 rounded-lg border-gray-200 bg-white md:overflow-hidden md:border">
                    <Location />
                    <ListCinema />
                </div>
                <div className="mt-5 text-center md:mt-8"><a href="/cinema/lich-chieu#homecinema" className="btn-primary medium">Xem tất cả</a></div>
            </div>
        </section>
    );
};

export default MovieSchedule;
