import React, { useEffect, useState } from 'react'
import { port } from '../../../port/config';
import axios from 'axios';
import LoadingContent from '../../../global/components/LoadingContent';
import { Link, useParams } from 'react-router-dom';
import { resetSearch } from '../../../redux/searchSlice';
import { useDispatch } from 'react-redux';
import lableClass from '../../../helper/lableClass';


const Right = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

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
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    `${port.ip}/movies`,
                );
                setMovies(response.data.data);
            } catch (error) {

            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    if (isLoading) return <LoadingContent />;
    let i = 0;
    return (
        <div className="mb-6 mt-7">
            <h3 className=" mb-2 flex-1 text-xl font-bold">Phim đang chiếu</h3>
            <div className='cinema relative divide-y divide-gray-200 '>
                {movies.map((movie) => {

                    if (movie.id == id) return;
                    i = i + 1;
                    return (
                        <div key={movie.id} className="cinema__item py-3">
                            <div className="flex flex-nowrap ">
                                <div className="w-16 flex-none">
                                    <Link onClick={resetFilter} to={`/movies/${movie.id}`} className="group block ">
                                        <div className="background-gray-100 wrap-next-img relative  z-10 ">
                                            <div className="aspect-w-7 aspect-h-10 w-full leading-0 scale-100 overflow-hidden rounded bg-gray-200 transition-transform duration-300 group-hover:scale-105">

                                                <img src={movie.poster.slice(0, 4) == "http" ? movie.poster : `${port.ip}/uploads/movies/${movie.poster}`} alt="..." className="h-full w-full object-cover object-center" loading="lazy" />
                                            </div>
                                            <div className="  absolute bottom-1 left-1 z-10 text-xl font-bold text-white text-opacity-95 md:text-2xl">{i}</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="flex-1 pl-4 ">
                                    <div>
                                        {movie.label &&
                                            <div className="mb-1 flex origin-left scale-90 flex-row  flex-nowrap space-x-2">
                                                <div className={`inline-flex h-5  items-center justify-center rounded-sm bg-opacity-80 px-1  text-xs font-semibold text-white text-opacity-95 ${lableClass[movie.label].class}`} style={{ minWidth: 20 }}> {lableClass[movie.label].text}</div>
                                            </div>}
                                    </div>
                                    <Link onClick={resetFilter} to={`/movies/${movie.id}`} className=" line-clamp-2   text-md font-semibold leading-tight text-gray-800 hover:text-pink-500">{movie.title}</Link>
                                    <div className="mt-1 text-tiny leading-tight text-gray-500">{movie.genre}</div>
                                    <div className="mt-1 flex items-center text-tiny text-gray-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="mr-1 h-4 w-4 text-yellow-400">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span> 7.7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default Right