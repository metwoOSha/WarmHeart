import { Mousewheel, Pagination, EffectFade } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./Slider.css";
import { useEffect, useState } from "react";

const sliderArr = [
    { name: "helgun", img: "/images/helgun.png" },
    { name: "kersti", img: "/images/kersti.png" },
    { name: "vivianna", img: "/images/vivianna.png" },
    { name: "ingrun", img: "/images/ingrun.png" },
    { name: "varkrage", img: "/images/varkrage.png" },
    { name: "ingabritta", img: "/images/ingabritta.png" },
];

export function Slider() {
    const [direction, setDirection] = useState(
        window.innerWidth > 600 ? "horizontal" : "vertical"
    );

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 600) {
                setDirection("vertical");
            } else {
                setDirection("horizontal");
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <Swiper
            modules={[Pagination, Mousewheel]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            direction={direction}
            loop={true}
            mousewheel={true}
            spaceBetween={150}
        >
            {sliderArr.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item.img} alt={item.name} className="image" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
