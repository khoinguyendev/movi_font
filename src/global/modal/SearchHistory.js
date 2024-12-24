import React from 'react'
import { Link } from 'react-router-dom';

const SearchHistory = ({ setIsOpen }) => {
    const searchHistory = JSON.parse(localStorage.getItem('history'));
    if (searchHistory.length == 0) return;
    return (
        <div class="mt-3">
            <h5 class="pb-2 text-xs text-gray-500">TÌM KIẾM GẦN ĐÂY</h5>
            <ul class="grid grid-cols-1 gap-y-1">
                {searchHistory.map((movie) => {
                    return <li class="">
                        <Link onClick={() => setIsOpen(false)} to={`/movies/${movie.id}`}>
                            <div class="flex items-center pb-1">
                                <div class="mr-2 shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-3 w-3  text-gray-500">
                                        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </div>
                                <div class="tt  min-w-0 grow truncate text-xs font-bold text-gray-700 hover:text-pink-500">{movie.title}</div>
                            </div>
                        </Link>
                    </li>
                })}


            </ul>
        </div>

    )
}

export default SearchHistory