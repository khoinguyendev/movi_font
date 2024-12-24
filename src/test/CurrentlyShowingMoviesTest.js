import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Test from '../global/components/Test';


const CurrentlyShowingMoviesTest = () => {
    return (
        <section
            className="scroll-margin-top bg-black bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14"
            style={{
                backgroundImage: `url(https://homepage.momocdn.net/img/momo-upload-api-210701105436-637607336767432408.jpg)`,
            }}
            id="phimdangchieu"
        >
            <div className="mx-auto w-full max-w-6xl px-5 md:px-8 lg:px-8">
                <div className="mb-5 text-center md:mb-8">
                    <h2 className="relative z-2 font-bold text-2xl lg:text-3xl text-white">
                        Phim đang chiếu
                    </h2>
                </div>


                <Test />
            </div>
        </section>
    );
};

export default CurrentlyShowingMoviesTest;
