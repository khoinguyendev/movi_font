import React, { useRef } from 'react';

const MovieCard = ({ title, rating, genre, imgSrc, link }) => {
    return (
        <div className="swiper-slide h-auto" style={{ width: '201.6px', marginRight: '20px' }}>
            <div className="group relative block cursor-pointer">
                <div className="absolute left-1/2 top-1/2 z-[20] h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-auto transition-transform group-hover:scale-110 md:h-10 md:w-10">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="jsx-708c0e64c1e1a9c7">
                        <g fill="none" fillRule="evenodd">
                            <circle stroke="#FFF" strokeWidth="2" fillOpacity=".24" fill="#000" cx="24" cy="24" r="23"></circle>
                            <path d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z" fill="#FFF"></path>
                        </g>
                    </svg>
                </div>
                <div className="relative z-10 overflow-hidden rounded bg-gray-100 border-blend">
                    <a href={link}>
                        <div className="absolute inset-0 z-20 bg-transparent px-2 py-2">
                            <div className="flex flex-row flex-nowrap space-x-2">
                                <div style={{ minWidth: '20px' }} className="inline-flex h-5 items-center justify-center rounded-sm bg-opacity-80 px-1 text-xs font-semibold text-white text-opacity-95 cinema-rate-red">
                                    {rating}
                                </div>
                            </div>
                        </div>
                    </a>
                    <div className="flex bg-gray-900">
                        <div className="aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105">
                            <img src={imgSrc} alt={title} className="h-full w-full object-cover object-center" loading="lazy" />
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-2 left-0 z-10 text-4xl font-bold text-white text-opacity-90 drop-shadow md:text-5xl">18</div>
            </div>
            <div className="mt-2">
                <a href={link} className="group">
                    <div className="truncate font-semibold leading-tight sm:text-md text-white group-hover:text-pink-400">{title}</div>
                    <div className="mt-1 truncate text-tiny leading-tight text-gray-400 group-hover:text-pink-400">{genre}</div>
                </a>
            </div>
        </div>
    );
};


const MovieCard2 = ({ title, rating, genre, imgSrc, link, ageRating }) => {
    return (
        <div className="swiper-slide h-auto" style={{ width: "201.6px", marginRight: "20px" }}>
            <div className="group relative block cursor-pointer">
                {/* Play Button */}
                <div className="absolute left-1/2 top-1/2 z-[20] h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                            <circle
                                stroke="#FFF"
                                strokeWidth="2"
                                fillOpacity=".24"
                                fill="#000"
                                cx="24"
                                cy="24"
                                r="23"
                            ></circle>
                            <path
                                d="M34.667 24.335c0 .515-.529.885-.529.885l-14.84 9.133c-1.08.704-1.965.182-1.965-1.153V15.467c0-1.338.884-1.856 1.968-1.153L34.14 23.45c-.002 0 .527.37.527.885Z"
                                fill="#FFF"
                                fillRule="nonzero"
                            ></path>
                        </g>
                    </svg>
                </div>

                {/* Movie Image */}
                <div className="relative z-10 overflow-hidden rounded border-blend">
                    <a href={link}>
                        <div className="absolute  inset-0 z-20 bg-transparent px-2 py-2">
                            <div className="flex space-x-2">
                                {ageRating && (
                                    <div
                                        style={{ minWidth: "20px" }}
                                        className="inline-flex h-5 items-center justify-center rounded-sm bg-opacity-80 px-1 text-xs font-semibold text-white cinema-rate-red"
                                    >
                                        {ageRating}
                                    </div>
                                )}
                            </div>
                        </div>
                    </a>
                    <div className="flex bg-gray-900">
                        <div className="aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105">
                            <img
                                src={imgSrc}
                                alt={title}
                                className="h-full w-full object-cover object-center"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
                <div className="absolute -bottom-2 left-0 z-10 text-4xl font-bold text-white text-opacity-90 drop-shadow md:text-5xl">18</div>

                {/* Movie Info */}

            </div>
            <div className="mt-2">
                <a href={link} className="group">
                    <div className="truncate font-semibold leading-tight sm:text-md text-white group-hover:text-pink-400">
                        {title}
                    </div>
                    <div className="mt-1 truncate text-tiny leading-tight text-gray-400 group-hover:text-pink-400">
                        {genre}
                    </div>
                </a>
            </div>
            <div className="mt-1 flex items-center text-tiny text-gray-200">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mr-1 h-4 w-4 text-yellow-400"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                {rating}
            </div>
        </div>
    );
};

const Test = () => {
    const swiperRef = useRef(null); // Reference to the swiper container

    // Movie data array
    const movieData = [
        {
            title: 'Linh Miêu: Quỷ Nhập Tràng',
            rating: '7',
            genre: 'Kinh Dị',
            imgSrc: 'https://cinema.momocdn.net/img/50706563295805291-Untitled-1.jpg',
            link: '/cinema/linh-mieu-quy-nhap-trang-24045',
        },
        {
            title: 'Chiến Địa Tử Thi',
            rating: '7',
            ageRating: "18+",
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/111980778202036130-chien-dia.jpg',
            link: '/cinema/operation-undead-24037',
        },
        {
            title: 'Tee Yod 2',
            rating: '7',
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/50203322122973007-56744601924282197-Capture-2024-09-30-112200-compressed.jpg',
            link: '/cinema/tee-yod-2-24044',
        },
        {
            title: 'Tee Yod 2',
            rating: '8.8',
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/50203322122973007-56744601924282197-Capture-2024-09-30-112200-compressed.jpg',
            link: '/cinema/tee-yod-2-24044',
        },
        {
            title: 'Tee Yod 2',
            rating: '8.8',
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/50203322122973007-56744601924282197-Capture-2024-09-30-112200-compressed.jpg',
            link: '/cinema/tee-yod-2-24044',
        },
        {
            title: 'Tee Yod 2',
            rating: '8.8',
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/50203322122973007-56744601924282197-Capture-2024-09-30-112200-compressed.jpg',
            link: '/cinema/tee-yod-2-24044',
        },
        {
            title: 'Tee Yod 2',
            rating: '8.8',
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/50203322122973007-56744601924282197-Capture-2024-09-30-112200-compressed.jpg',
            link: '/cinema/tee-yod-2-24044',
        },
        {
            title: 'Tee Yod 2',
            rating: '8.8',
            genre: 'Kinh Dị, Chính Kịch',
            imgSrc: 'https://cinema.momocdn.net/img/50203322122973007-56744601924282197-Capture-2024-09-30-112200-compressed.jpg',
            link: '/cinema/tee-yod-2-24044',
        },
    ];

    // Function to slide the swiper to the previous item
    const goToPrev = () => {
        if (swiperRef.current) {
            const swiperWrapper = swiperRef.current.querySelector('.swiper-wrapper');
            swiperWrapper.scrollBy({ left: -220, behavior: 'smooth' }); // Move left by width of each item
        }
    };

    // Function to slide the swiper to the next item
    const goToNext = () => {
        if (swiperRef.current) {
            const swiperWrapper = swiperRef.current.querySelector('.swiper-wrapper');
            swiperWrapper.scrollBy({ left: 220, behavior: 'smooth' }); // Move right by width of each item
        }
    };

    return (
        <div className="-mx-5 md:mx-0">
            <div className="fresnel-container fresnel-lessThan-md fresnel-:R33am:" />
            <div className="fresnel-container fresnel-greaterThan-sm fresnel-:R53am:">
                <div className="jsx-de1540fc10b2e2a swiper-cinema relative">
                    <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events" ref={swiperRef}>
                        <div className="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
                            {movieData.map((movie, index) => (
                                <MovieCard2 key={index} {...movie} />
                            ))}
                        </div>
                        <div
                            className="jsx-de1540fc10b2e2a button-prev button-swiper absolute -left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow transition-all hover:opacity-90"
                            onClick={goToPrev}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="jsx-de1540fc10b2e2a h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" className="jsx-de1540fc10b2e2a" />
                            </svg>
                        </div>
                        <div
                            className="jsx-de1540fc10b2e2a button-next button-swiper absolute -right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow transition-all hover:opacity-90"
                            onClick={goToNext}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="jsx-de1540fc10b2e2a h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" className="jsx-de1540fc10b2e2a" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test;
