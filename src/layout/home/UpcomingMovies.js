import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { port } from '../../port/config';
import LoadingContent from '../../global/components/LoadingContent';
import { useDispatch } from 'react-redux';
import { setModalTrailer } from '../../redux/modalTrailerSlice';
import lableClass from '../../helper/lableClass';
import { resetSearch } from '../../redux/searchSlice';

const UpcomingMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const [movies, setMovies] = useState([]);
    const swiperRef = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${port.ip}/movies/status/comingsoon`,
                );
                setMovies(response.data.data);
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    const handleNext = () => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.activeIndex; // Get current index
            swiperRef.current.slideTo(currentIndex + 5); // Move to the next 5 slides
            // console.log(swiperRef.current.activeIndex)
        }
    };

    const handlePrev = () => {
        if (swiperRef.current) {
            const currentIndex = swiperRef.current.activeIndex; // Get current index
            swiperRef.current.slideTo(currentIndex - 5); // Move to the previous 5 slides

        }
    };

    const hanldeOpenTrailer = (data) => {
        dispatch(setModalTrailer({ isOpen: true, item: data }));

    }
    const resetFilter = () => {
        dispatch(resetSearch({
            date: new Date().toISOString(),
            location: 1,
            brandId: 0,
            near: false,
            currentLocation: {
                latitude: 10.83034725,
                longitude: 106.77077958333336,
            }
        }));
    }
    if (isLoading) return <LoadingContent />;

    return (
        <section
            className="mt-4 scroll-margin-top bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14"
            // style={{
            //     backgroundImage: `url(https://homepage.momocdn.net/img/momo-upload-api-210701105436-637607336767432408.jpg)`,
            // }}
            id="phimsapchieu"
        >
            <div className="mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8">
                <div className="mb-5 text-center md:mb-8">
                    <h2 className="relative z-2 font-bold text-2xl lg:text-3xl text-white">
                        Phim Sắp Chiếu
                    </h2>
                </div>
                <div className="-mx-5 md:mx-0">
                    <div className="fresnel-container fresnel-lessThan-md fresnel-:R33am:" />
                    <div className="fresnel-container fresnel-greaterThan-sm fresnel-:R53am:">
                        <div className="jsx-de1540fc10b2e2a swiper-cinema relative">
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                spaceBetween={20}
                                slidesPerView={5}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 5 },
                                }}

                            // navigation={{
                            //     prevEl: '.button-prev', // Selector cho nút trước
                            //     nextEl: '.button-next', // Selector cho nút sau
                            // }}
                            // modules={[Navigation]} // Kích hoạt Navigation module


                            >
                                {movies.length > 0 && movies.map((movie, index) => (
                                    <SwiperSlide key={movie.id}>
                                        <div className="group relative block cursor-pointer">
                                            {/* Play Button */}
                                            <div onClick={() => hanldeOpenTrailer(movie)} className="absolute left-1/2 top-1/2 z-[20] h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform group-hover:scale-110">
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
                                                <Link onClick={resetFilter} to={`/movies/${movie.id}`}>
                                                    <div className="absolute  inset-0 z-20 bg-transparent px-2 py-2">
                                                        <div className="flex space-x-2">
                                                            {movie?.label && (
                                                                <div
                                                                    style={{ minWidth: "20px" }}
                                                                    className={`inline-flex h-5 items-center justify-center rounded-sm bg-opacity-80 px-1 text-xs font-semibold text-white ${lableClass[movie.label]?.class}`}
                                                                >
                                                                    {lableClass[movie.label]?.text}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className="flex bg-gray-900">
                                                    <div className="aspect-w-7 aspect-h-10 w-full scale-100 transition-transform duration-300 group-hover:scale-105">
                                                        <img
                                                            src={movie.poster.slice(0, 4) == "http" ? movie.poster : `${port.ip}/uploads/movies/${movie.poster}`}
                                                            alt={movie.title}
                                                            className="h-full w-full object-cover object-center"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute -bottom-2 left-0 z-10 text-4xl font-bold text-white text-opacity-90 drop-shadow md:text-5xl">{index + 1}</div>

                                            {/* Movie Info */}

                                        </div>
                                        <div className="mt-2">
                                            <a href={5} className="group">
                                                <div className="truncate font-semibold leading-tight sm:text-md text-white group-hover:text-pink-400">
                                                    {movie.title}
                                                </div>
                                                <div className="mt-1 truncate text-tiny leading-tight text-gray-400 group-hover:text-pink-400">
                                                    {movie.genre}
                                                </div>
                                            </a>
                                        </div>

                                        {movie.rating &&
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

                                            </div>
                                        }
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div
                                onClick={handlePrev}
                                className={`jsx-de1540fc10b2e2a button-prev button-swiper absolute -left-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow transition-all hover:opacity-90 `}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="jsx-de1540fc10b2e2a h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" className="jsx-de1540fc10b2e2a" />
                                </svg>
                            </div>
                            <div
                                onClick={handleNext}

                                className="jsx-de1540fc10b2e2a button-next button-swiper absolute -right-6 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-200 bg-white text-black shadow transition-all hover:opacity-90"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="jsx-de1540fc10b2e2a h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" className="jsx-de1540fc10b2e2a" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}

export default UpcomingMovies