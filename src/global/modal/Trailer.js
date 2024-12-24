import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalTrailer } from '../../redux/modalTrailerSlice';
import { port } from '../../port/config';

const Trailer = () => {
    const data = useSelector((state) => state.modaltrailer.data);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setModalTrailer({ isOpen: false, item: null }));
    }
    if (!data.isOpen) return;
    return (
        <div
            class="modal fixed inset-0 flex max-h-full flex-row justify-center bg-black bg-opacity-50 p-0 text-gray-800 sm:mt-0 md:items-center md:p-9 items-center modal-trailer px-3"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="modalFadeUp relative flex max-h-full w-full max-w-full flex-col rounded-t-xl shadow-xl md:rounded-xl md:h-auto md:max-w-3xl"
                role="dialog"
                aria-modal="true"
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute -top-5 right-3 z-20 flex cursor-pointer md:-right-5"
                    aria-label="Close modal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-10 w-10 text-white opacity-80 hover:opacity-100"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>

                {/* Modal Body */}
                <div className="modal-body h-full overflow-auto rounded-md bg-gray-800">
                    {/* Trailer Video */}
                    <div className="relative aspect-[16/9] w-full bg-black">
                        <iframe
                            className="absolute inset-0 h-full w-full"
                            frameBorder="0"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            title={data?.item.title}
                            src={data?.item.trailerUrl}
                        />
                    </div>

                    {/* Details */}
                    <div className="relative z-[1] flex flex-nowrap bg-black/40 bg-opacity-80 px-6 py-4 backdrop-blur sm:space-x-5">
                        {/* Thumbnail */}
                        <div className="hidden w-20 min-w-0 flex-shrink-0 sm:block">
                            <div className="aspect-w-7 aspect-h-10 w-full">
                                <img
                                    src={data?.item.poster.slice(0, 4) == "http" ? data?.item.poster : `${port.ip}/uploads/movies/${data?.item.poster}`}


                                    alt={data?.item.title}
                                    className="h-full w-full object-cover object-center"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Info */}
                        <div className="min-w-0">
                            <h3 className="text-xl font-bold text-white">
                                {data?.item.title}
                                <span className="hidden text-sm text-white text-opacity-70 sm:inline-block">
                                    - {data?.item.genre}
                                </span>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm text-white text-opacity-70">
                                {data?.item.description}
                            </p>
                            <div className="mt-3 flex space-x-3">
                                {/* <a
                  href={bookingLink}
                  className="btn tracking-engage-btn-popup inline-block cursor-pointer rounded-md bg-pink-700 px-5 py-1.5 text-center text-sm font-bold text-white text-opacity-90 transition-all hover:bg-pink-800"
                >
                  Đặt vé
                </a> */}
                                <button
                                    onClick={onClose}
                                    className="btn inline-block cursor-pointer rounded-md bg-gray-500 px-5 py-1.5 text-center text-sm font-bold text-gray-100 text-opacity-90 transition-all hover:bg-gray-600"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
