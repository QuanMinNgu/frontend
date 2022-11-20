import React from "react";
import { Navigation, Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCard from "./SwiperCard";
const SwiperHome = ({ num }) => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Scrollbar]}
            spaceBetween={10}
            slidesPerView={num}
            navigation
            scrollbar={{ draggable: true }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop
        >
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
            <SwiperSlide>
                <SwiperCard />
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperHome;
