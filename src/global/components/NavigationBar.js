import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { port } from "../../port/config";
import SearchModal from "../modal/SearchModal";

const NavigationBar = () => {
    const user = useSelector((state) => state.user.items);
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef(null); // Ref to detect clicks outside the modal

    // Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="ml-auto flex space-x-3 flex-nowrap items-center">
            {/* Search Icon */}
            <div className="relative flex cursor-pointer text-gray-600 hover:text-gray-900">
                <Link to={`${user ? "/me/vephim" : "login"}`} className="px-2 flex py-2 md:py-5">
                    {user ? (
                        user.avatar ? (
                            <img
                                className="w-6 h-6 rounded-full"
                                src={`${port.ip}/uploads/avatar/${user.avatar}`}
                                alt="avatar"
                            />
                        ) : (
                            <Avatar name={user.username} />
                        )
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    )}
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className="px-2 flex py-2 md:py-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                {isOpen && (
                    <div ref={modalRef}>
                        <SearchModal setIsOpen={setIsOpen} />
                    </div>
                )}
            </div>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden">
                <button
                    type="button"
                    className="text-gray-800 w-10 h-10 flex items-center justify-center hover:text-gray-700"
                >
                    <span className="sr-only">Navigation</span>
                    <div style={{ willChange: "auto", opacity: 1 }}>
                        <svg
                            className="block w-7 h-7"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    <div style={{ willChange: "auto", opacity: 0 }}>
                        <svg
                            className="w-7 h-7 hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default NavigationBar;
