import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { setSearch } from '../../../redux/searchSlice';
import LoadingContent from '../../../global/components/LoadingContent';
import { port } from '../../../port/config';
import axios from 'axios';



const SwiperBrand = ({ moviId }) => {
    const filter = useSelector((state) => state.search.filter);

    const dispatch = useDispatch();
    const [startIndex, setStartIndex] = useState(filter.brandId);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    const [brands, setBrands] = useState([]);
    const handleSetBrandid = (id) => {
        dispatch(setSearch({ brandId: id }));
        setStartIndex(id);
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.post(`${port.ip}/brands/today`, {
                    // movieId: 1,
                    // date: filter.date,
                    // location: filter.location,
                    // brandId: filter.brandId,
                });

                setBrands(response.data.data);
            } catch (error) {
                console.log({ error });
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, [filter.date]);
    if (isLoading) return <LoadingContent />
    return (
        <div className="pb-2 pt-3 ">

            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                // onSlideChange={(swiper) => setStartIndex(swiper.activeIndex)}
                modules={[Navigation]}
                slidesPerView={11}
                spaceBetween={2}
                style={{ padding: '0 0.75rem' }}
                className="swiper px5"
            >
                <SwiperSlide onClick={() => handleSetBrandid(0)} key={0} style={{ width: "64px", marginRight: '2px' }}>
                    <div className="cursor-pointer is-active" >
                        <div className={`relative mx-auto flex h-12 w-12 items-start justify-center rounded-lg border bg-white p-1 ${startIndex == 0 && "text-pink-500 border-pink-500"} `}>
                            <img
                                alt="Brand"
                                src="https://homepage.momocdn.net/next-js/_next/static/public/cinema/dexuat-icon.svg"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className={`mt-2 text-center text-xs font-semibold  ${startIndex == 0 ? "text-pink-500" : "text-gray-500"}`}>Tất cả</div>
                    </div>
                </SwiperSlide>
                {brands.map((item, index) => (
                    <SwiperSlide onClick={() => handleSetBrandid(item.id)} key={item.id} style={{ width: "64px", marginRight: '2px' }}>
                        <div className="cursor-pointer is-active" >
                            <div className={`relative mx-auto flex h-12 w-12 items-start justify-center rounded-lg border bg-white p-1 ${startIndex == item.id && "text-pink-500 border-pink-500"}`}>
                                <img
                                    alt={item.name}
                                    src={item.image}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className={`mt-2 text-center text-xs font-semibold ${startIndex == item.id ? "text-pink-500" : "text-gray-500"}`}>{item.name}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation buttons */}
            {/* <div
                ref={prevRef}
                className={`button-swiper button-prev absolute left-0 top-0 z-10 flex h-full w-12 items-center pl-1 text-gray-500 ${startIndex === 0 ? 'swiper-button-disabled' : ''
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>
            <div
                ref={nextRef}
                className={`button-swiper button-next absolute right-0 top-0 z-10 flex h-full w-12 items-center justify-end pr-1 text-gray-500 ${!startIndex >= brand.length ? 'swiper-button-disabled' : ''
                    }`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div> */}
        </div>
    );
};

export default SwiperBrand;
