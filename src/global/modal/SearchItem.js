import React from 'react'
import { port } from '../../port/config';
import { Link } from 'react-router-dom';

const SearchItem = ({ movie, setIsOpen }) => {
    const saveHistory = () => {
        // Retrieve history from localStorage or initialize an empty array
        const history = JSON.parse(localStorage.getItem('history')) || [];

        // Check if the movie is already in history
        const exists = history.some((item) => item.id === movie.id);
        if (!exists) {
            // Add the new movie to the history
            const newHistory = [...history, { title: movie.title, id: movie.id }];

            // Keep only the last 5 items
            if (newHistory.length > 5) {
                newHistory.shift(); // Remove the first (oldest) item
            }

            // Save the updated history to localStorage
            localStorage.setItem('history', JSON.stringify(newHistory));
        }

        // Close the modal
        setIsOpen(false);
    };

    return (
        <li index={2} className>
            <div className="flex flex-nowrap items-center py-3">
                <Link onClick={() => saveHistory(movie)} to={`/movies/${movie.id}`} className="flex-shrink-0">
                    <div className="background-gray-100 wrap-next-img relative z-10 ">
                        <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
                            <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
                                <img alt="..." aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2776%27/%3e" style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }} />
                            </span>

                            <img alt={movie.title} src={movie.poster.slice(0, 4) == "http" ? movie.poster : `${port.ip}/uploads/movies/${movie.poster}`} decoding="async" data-nimg="intrinsic" className="leading-0 scale-100  overflow-hidden rounded bg-gray-200 transition-transform duration-300 group-hover:scale-105" style={{ position: 'absolute', inset: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }} />
                        </span>
                    </div>
                </Link>
                <Link onClick={() => saveHistory(movie)} to={`/movies/${movie.id}`} className="group">
                    <div className="flex-1 pl-4 ">
                        <p className="text-sm font-bold leading-tight text-gray-800 group-hover:text-pink-500">{movie.title}</p>
                        <p className="text-tiny mt-1 leading-tight text-gray-500">{movie.genre}</p>
                        <div className="flex items-center">
                            <div className="text-tiny mt-1 flex items-center text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mr-1 h-4 w-4 text-yellow-400">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <p className="text-sm"> 9.2</p>
                            </div>
                            <div className="mt-1 flex scale-[0.8] items-center space-x-1 rounded-lg bg-red-600 p-1 text-white shadow-md">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
                                    </path>
                                </svg>
                                <span className="text-tiny uppercase">Đang chiếu</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </li>

    )
}

export default SearchItem