import React, { useState } from 'react'

const Dropdown = ({ title, children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <li className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
        >

            {children ?
                <button
                    id="radix-:Re6m:-trigger-radix-:R3e6m:"
                    data-state="closed"
                    aria-expanded="false"
                    aria-controls="radix-:Re6m:-content-radix-:R3e6m:"
                    className="inline-flex items-center justify-center whitespace-nowrap font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed border border-transparent text-gray-900 bg-transparent hover:bg-gray-100 disabled:text-gray-400 disabled:bg-transparent h-8 text-sm rounded-md group px-2"
                    data-radix-collection-item=""
                >
                    {title}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className={`relative ml-1 h-4 w-4 transition duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"
                            }`}
                    > <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                    ></path>


                    </svg>
                </button> : <a href="/cinema/phim-chieu?fromType=nav_menu" className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed border border-transparent text-gray-900 bg-transparent hover:bg-gray-100 disabled:text-gray-400 disabled:bg-transparent h-8 px-3 text-sm rounded-md" data-radix-collection-item="">{title}</a>

            }
            {children && isDropdownOpen && (
                <div
                    id="radix-:Re6m:-content-radix-:R3e6m:"
                    aria-labelledby="radix-:Re6m:-trigger-radix-:R3e6m:"
                    data-orientation="horizontal"
                    data-state="open"
                    className="absolute top-full mt-3 rounded-lg bg-white text-gray-900 ring-1 ring-gray-900/5 shadow-[0_10px_32px_rgba(34,42,53,0.15),0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.08),0_1px_1px_rgba(34,42,53,0.1),0_24px_68px_rgba(47,48,55,0.1)] before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:w-full before:bg-transparent before:opacity-0 before:h-3 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out left-0"
                    dir="ltr"
                >
                    <ul className="grid w-[300px] p-2 grid-cols-1">
                        {children.map((item) => {
                            return (
                                <li>
                                    <a
                                        className="select-none space-y-1 rounded-md py-2 leading-none no-underline outline-none transition-colors hover:bg-pink-50 hover:text-pink-500 focus:bg-pink-50 focus:text-pink-500 flex flex-nowrap space-x-2 min-h-9 items-center px-3"
                                        href="/cinema/lich-chieu?fromType=nav_menu"
                                        data-radix-collection-item=""
                                        data-tabindex=""
                                        tabIndex="-1"
                                    >
                                        <div>
                                            <div className="text-sm font-medium text-gray-900 leading-none">
                                                {item}
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}

        </li>

    )
}

export default Dropdown