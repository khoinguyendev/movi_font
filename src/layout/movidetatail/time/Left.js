import React, { useEffect, useState } from 'react'
import SwiperDate from './SwiperDate'
import SwiperBrand from './SwiperBrand'
import BookingList from './BookingList'
import Location from './Location'
import Trailer from '../../../global/modal/Trailer'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { port } from '../../../port/config'
import LoadingContent from '../../../global/components/LoadingContent'
import { useParams } from 'react-router-dom'


const Left = ({ name, movieId, duration }) => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const filter = useSelector((state) => state.search.filter);
    const [data, setData] = useState("");
    const haversineDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // bán kính Trái Đất tính bằng km
        const φ1 = (lat1 * Math.PI) / 180;
        const φ2 = (lat2 * Math.PI) / 180;
        const Δφ = ((lat2 - lat1) * Math.PI) / 180;
        const Δλ = ((lon2 - lon1) * Math.PI) / 180;

        const a =
            Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return R * c; // Khoảng cách tính bằng km
    };
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.post(`${port.ip}/cinemas/showtimes/today`, {
                    movieId: id,
                    date: filter.date, // Send date as a string "YYYY-MM-DD"
                    location: filter.location,
                    brandId: filter.brandId,
                });
                console.log(filter);
                if (filter.near) {
                    const sortedCinemas = response.data.data
                        .map((cinema) => {
                            const distance = haversineDistance(
                                filter.currentLocation.latitude,
                                filter.currentLocation.longitude,
                                parseFloat(cinema.latitude),
                                parseFloat(cinema.longitude)
                            );
                            return { ...cinema, distance }; // Thêm khoảng cách vào đối tượng
                        })
                        .sort((a, b) => a.distance - b.distance); // Sắp xếp theo khoảng cách
                    setData(sortedCinemas);
                    console.log("a");
                } else {
                    setData(response.data.data);
                    console.log("b");
                }


            } catch (error) {
                console.log({ error });
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [filter, id]);


    return (
        <section className='py-8 '>
            <div className="mb-2 sm:mb-0"><h2 className="text-xl font-bold sm:pr-80">Lịch chiếu {name}</h2></div>
            <div className='relative mt-4'>
                <Location />
            </div>
            <div className='rounded md:border md:border-gray-200'>
                <div className='top-sticky-menu sticky z-20 -mx-5 bg-white pt-2 shadow-sm  md:mx-0'>
                    <SwiperDate />
                </div>
                {/* <div className='box-nav cinema-scroll-margin sticky  -mx-5 border-b border-gray-200  bg-white md:top-0 md:mx-0 lg:relative'>
                    <SwiperBrand />
                </div> */}
                <div className='booking-list-height relative'>
                    {isLoading ? <LoadingContent /> : <BookingList data={data} movieId={movieId} duration={duration} />}

                </div>
            </div>

        </section>
    )
}

export default Left