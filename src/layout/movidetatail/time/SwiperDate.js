import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../redux/searchSlice';
import { toZonedTime, getTimezoneOffset } from 'date-fns-tz';


const SwiperDate = () => {
    const dispatch = useDispatch();

    const days = Array.from({ length: 14 }, (_, index) => {
        const today = new Date();
        const vietnamTimeZone = 'Asia/Ho_Chi_Minh';  // Múi giờ cho Việt Nam
        // Create a new date for the current day in the local time zone
        const date = new Date(today);
        date.setDate(today.getDate() + index);  // Add the index to the current date to get the next days

        // Convert the date to Vietnam's time zone
        const vietnamDate = toZonedTime(date, vietnamTimeZone);

        return {
            day: vietnamDate.getDate(),
            weekDay: vietnamDate.toLocaleDateString('vi-VN', { weekday: 'short' }),
            fullDate: vietnamDate.toISOString(), // Store the date as an ISO string in Vietnam's time zone
        };
    });

    const [startIndex, setStartIndex] = useState(0);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const selectedDateRef = useRef("");

    useEffect(() => {
        const swiperInstance = document.querySelector('.swiper').swiper;
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, []);

    const handleChoseDay = (i) => {

        const selectedDate = days[i].fullDate; // Sử dụng ngày đầy đủ (ISO string)
        dispatch(setSearch({ date: selectedDate }));
        console.log(days);
        // // Only update if the date is different
        if (selectedDateRef.current !== selectedDate) {
            selectedDateRef.current = selectedDate;
            setStartIndex(i);
        }
    };

    return (
        <div style={{ zIndex: 5 }} className="relative border-b border-gray-100 px-0 pb-2">
            <Swiper
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                initialSlide={startIndex}
                modules={[Navigation]}
                slidesPerView={9}
                spaceBetween={8}
                style={{ padding: '0 1.25rem' }}
                className="swiper"
            >
                {days.map((day, index) => (
                    <SwiperSlide
                        key={index}
                        onClick={() => handleChoseDay(index)}
                        style={{ width: '64px', marginRight: '8px' }}
                    >
                        <div
                            className={`w-16 cursor-pointer overflow-hidden rounded border py-0 text-center transition-all ${index === startIndex ? 'border-pink-700' : 'border-gray-300 hover:border-gray-400'}`}
                        >
                            <div
                                className={`mx-auto justify-center py-1 text-lg font-semibold ${index === startIndex ? 'bg-pink-600 text-white' : 'bg-gray-100'}`}
                            >
                                {day.day}
                            </div>
                            <div
                                className={`text-nowrap flex h-6 items-center justify-center text-xs ${index === startIndex ? 'text-pink-600' : 'text-gray-400'}`}
                            >
                                {index === 0 ? "Hôm nay" : day.weekDay}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div
                ref={prevRef}
                className={`button-swiper button-prev absolute cursor-pointer left-0 top-0 z-10 flex h-full w-12 items-center pl-1 text-gray-500 ${startIndex < 9 ? 'swiper-button-disabled' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </div>

            <div
                ref={nextRef}
                className={`button-swiper button-next absolute cursor-pointer right-0 top-0 z-10 flex h-full w-12 items-center justify-end pr-1 text-gray-500 ${startIndex >= days.length - 1 ? 'swiper-button-disabled' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    );
};

export default SwiperDate;

