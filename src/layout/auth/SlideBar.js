import React from 'react';
import { NavLink } from 'react-router-dom';

const SlideBar = () => {
    return (
        <div className="space-y-2">
            {/* Vé phim Link */}
            <NavLink
                to="/me/vephim"
                className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-sm duration-300 ease-in-out 
                    ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} 
                    dark:${isActive ? 'bg-meta-4 text-white' : 'text-bodydark1 hover:bg-meta-4'}`
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                </svg>


                Vé phim
            </NavLink>

            {/* Thông tin Link */}
            <NavLink
                to="/me/profile"
                className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-sm duration-300 ease-in-out 
                    ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} 
                    dark:${isActive ? 'bg-meta-4 text-white' : 'text-bodydark1 hover:bg-meta-4'}`
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>

                Thông tin
            </NavLink>
            <NavLink
                to="/me/voucher"
                className={({ isActive }) =>
                    `group flex items-center gap-3 rounded-lg px-4 py-3 font-medium text-sm duration-300 ease-in-out 
                    ${isActive ? 'bg-gray-800 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} 
                    dark:${isActive ? 'bg-meta-4 text-white' : 'text-bodydark1 hover:bg-meta-4'}`
                }
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>

                Điểm-Voucher
            </NavLink>
        </div>
    );
};

export default SlideBar;
