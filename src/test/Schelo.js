import React from 'react'

const Schelo = () => {
    return (
        <div>
            <div className="relative z-10">
                {/* Location Selector */}
                <div className="flex items-center pt-3 md:px-4">
                    <div className="hidden md:block mr-3">Vị trí</div>
                    <div className="flex items-center space-x-3">
                        {/* City Dropdown */}
                        <div className="relative flex h-9 w-40 items-center rounded border pl-7 pr-4 text-sm font-semibold border-pink-600 text-pink-600 hover:bg-gray-50 cursor-pointer">
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
                            <span className="block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
                                Hồ Chí Minh
                            </span>
                            <div className="absolute right-3">
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
                        {/* Nearby Button */}
                        <div className="relative flex h-9 w-28 items-center rounded border pl-7 text-sm font-semibold border-gray-300 text-gray-800 hover:bg-gray-50 cursor-pointer">
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
            </div>
            {/* Theater List */}
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="cinema-list-height relative mx-0 divide-y divide-gray-100">
                    {/* Search Input */}
                    <div className="relative px-3 py-2">
                        <input
                            type="text"
                            placeholder="Tìm theo tên rạp ..."
                            className="block h-9 w-full rounded border bg-gray-50 py-1 pl-3 pr-10 text-sm"
                        />
                        <span className="absolute right-5 top-4 text-gray-400">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </span>
                    </div>
                    {/* Example Theater */}
                    <div className="relative block px-4 py-2 cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                            <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded border bg-white">
                                <img
                                    src="https://homepage.momocdn.net/cinema/momo-amazone-s3-api-240829164527-638605467276820522.png"
                                    alt="CGV Crescent Mall"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="ml-3 text-md font-medium text-gray-800">
                                CGV Crescent Mall
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Column */}
                <div className="cinema-list-height md:col-span-2">
                    <div className="text-center py-5">
                        <button
                            type="button"
                            className="rounded-3xl bg-pink-50 px-4 py-1 text-sm font-bold text-pink-600 hover:bg-pink-100"
                        >
                            Xem thêm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schelo