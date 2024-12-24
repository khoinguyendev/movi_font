import React from 'react';
import CinemaSlider from './CinemaSlider';
const cinemaOptions = [
    {
        id: 1,
        name: 'Tất cả',
        icon: 'https://homepage.momocdn.net/next-js/_next/static/public/cinema/dexuat-icon.svg',
        isActive: true,
    },
    {
        id: 2,
        name: 'CGV',
        icon: 'https://homepage.momocdn.net/cinema/momo-amazone-s3-api-240829164527-638605467276820522.png',
    },
    {
        id: 3,
        name: 'Lotte Cinema',
        icon: 'https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png',
    },
    {
        id: 4,
        name: 'Galaxy Cinema',
        icon: 'https://homepage.momocdn.net/cinema/momo-upload-api-211123095138-637732578984425272.png',
    },
];
const Location = () => {


    return (
        <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center pt-3 md:px-4">
                <div className="mr-3 hidden md:block">Vị trí</div>
                <div className="flex items-center space-x-3">
                    {/* Location Button */}
                    <div className="relative flex h-9 w-40 cursor-pointer items-center rounded border pl-7 pr-4 text-sm font-semibold hover:bg-gray-50 border-pink-600 text-pink-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="absolute left-2 top-1 mt-1 h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">Hồ Chí Minh</span>
                        <div className="absolute right-3 md:block">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="h-4 w-4 opacity-50"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Near You Button */}
                    <div className="relative flex h-9 w-28 cursor-pointer items-center rounded border pl-7 text-sm font-semibold text-gray-800 hover:bg-gray-50 border-gray-300">
                        <svg
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            fill="currentColor"
                            className="absolute left-2 top-1 mt-1 h-4 w-4"
                        >
                            <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
                        </svg>
                        Gần bạn
                    </div>
                </div>
            </div>
            {/* Cinema Options */}
            <div className="fresnel-container fresnel-greaterThan-sm fresnel-:R4b5am:">
                <div className="jsx-e3ca1fdb8a72e6cd relative -mx-5 border-b  border-gray-200 bg-white md:top-0 md:mx-0">

                    <div className='jsx-e3ca1fdb8a72e6cd pb-2 pt-3 '>
                        <CinemaSlider />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
