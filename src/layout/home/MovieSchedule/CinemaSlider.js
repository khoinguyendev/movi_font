import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const CinemaSlider = () => {
    const cinemaOptions = [
        {
            id: 1,
            name: "Tất cả",
            icon: "https://homepage.momocdn.net/next-js/_next/static/public/cinema/dexuat-icon.svg",
            isActive: true,
        },
        {
            id: 2,
            name: "CGV",
            icon: "https://homepage.momocdn.net/cinema/momo-amazone-s3-api-240829164527-638605467276820522.png",
            isActive: false,
        },
        {
            id: 3,
            name: "Lotte Cinema",
            icon: "https://homepage.momocdn.net/blogscontents/momo-upload-api-210604170617-637584231772974269.png",
            isActive: false,
        },
        {
            id: 4,
            name: "Galaxy Cinema",
            icon: "https://homepage.momocdn.net/cinema/momo-upload-api-211123095138-637732578984425272.png",
            isActive: false,
        },
    ];

    return (

        <Swiper
            spaceBetween={10}
            slidesPerView="auto"
            navigation={true}
            className="swiper swiper-initialized swiper-horizontal swiper-pointer-events px-5 lg:px-3"
        >
            {cinemaOptions.map((option) => (
                <SwiperSlide
                    style={{ width: "4rem" }}
                    key={option.id}
                    className="swiper-slide cursor-pointer w-16 "
                >
                    <div
                        className={`relative mx-auto flex h-12 w-12 items-center justify-center rounded-lg border bg-white p-1 ${option.isActive ? "border-pink-500 text-pink-500" : "border-gray-200"}`}
                    >
                        <img src={option.icon} alt={option.name} className="w-9" />
                    </div>
                    <div
                        className={`mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xs font-semibold ${option.isActive ? "text-pink-500" : "text-gray-500"}`}
                    >
                        {option.name}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default CinemaSlider;
