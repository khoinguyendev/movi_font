import React, { useState, useEffect } from 'react';
import SearchItem from './SearchItem';
import axios from 'axios';
import LoadingContent from '../components/LoadingContent';
import { port } from '../../port/config';
import SearchHistory from './SearchHistory';

const SearchModal = ({ setIsOpen }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // Debounced API call
    useEffect(() => {
        if (searchTerm.trim() === '') {
            setSearchResults([]); // Clear results if the input is empty
            return;
        }

        const delayDebounceFn = setTimeout(() => {
            setIsSearching(true);
            axios
                .post(`${port.ip}/movies/search`, { title: searchTerm })
                .then((response) => {
                    setSearchResults(response.data.data);
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                })
                .finally(() => {
                    setIsSearching(false);
                });
        }, 1200);

        return () => clearTimeout(delayDebounceFn); // Cleanup timeout
    }, [searchTerm]);

    return (
        <div>
            <div
                className="modal-search absolute left-0 top-14 flex flex-col rounded-md border border-gray-300 bg-white shadow-lg md:top-20"
                style={{ zIndex: 51 }}
            >
                {/* Search Input */}
                <div className="shrink-0 px-4 py-3 shadow-sm">
                    <div className="search-box flex rounded-lg border border-gray-200 px-2 py-2 text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
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
                        <input
                            className="w-full pl-2 text-sm font-semibold text-gray-900"
                            type="text"
                            placeholder="Nhập tên phim"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Search Results */}
                <div className="relative min-h-[100px] max-h-[450px] grow overflow-y-auto overflow-x-hidden px-4 pb-3">
                    <SearchHistory setIsOpen={setIsOpen} />
                    {isSearching ? (
                        <LoadingContent />
                    ) : searchResults.length > 0 ? (
                        <ul className="grid grid-cols-1 gap-y-1">
                            {searchResults.map((movie) => (
                                <SearchItem setIsOpen={setIsOpen} movie={movie} />
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-gray-500">Không tìm thấy kết quả</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
