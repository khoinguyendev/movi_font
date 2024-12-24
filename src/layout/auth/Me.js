import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom';

import SlideBar from './SlideBar';
import Profile from './Profile';
import Ticket from './Ticket';
import Voucher from './Voucher';

const Me = () => {
    return (
        <div
            className="py-2 md:py-4 lg:py-6 landing:bg-transparent bg-pink-50"
            style={{ "--grad-rgb-color": "253 242 248" }}
        >
            <div className="mx-auto w-full  max-w-6xl px-5 md:px-8 lg:px-8">
                <div className="font-std  mb-10 w-full rounded-2xl bg-white p-10 font-normal leading-relaxed text-gray-900 shadow-xl">
                    <div className="flex min-h-[30rem] flex-col lg:flex-row lg:gap-6">
                        {/* Sidebar */}
                        <div className="lg:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
                            <SlideBar />
                        </div>

                        {/* Main Content */}
                        <div className="flex-grow lg:w-3/4 bg-white shadow-xl rounded-lg text-gray-900 p-4">
                            {/* Route outlet to switch between Profile and Ticket */}
                            <Routes>
                                <Route path="/vephim" element={<Ticket />} />
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/voucher" element={<Voucher />} />
                            </Routes>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;
