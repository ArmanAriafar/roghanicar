//? Required
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

//? Components
import OilArticleSlider from "./OilArticle";

export default function FilterMobileSlider() {
    return (
        <>
            <Swiper
                direction="vertical"
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                slidesPerView={3}
                spaceBetween={10}
                speed={1000}
                modules={[Autoplay]}
                className="mt-1"
            >
                <SwiperSlide>
                    <OilArticleSlider title="روغن موتور الف ۴ لیتر" link="1" />
                </SwiperSlide>
                <SwiperSlide>
                    <OilArticleSlider title="روغن موتور الف 5 لیتر" link="2" />
                </SwiperSlide>
                <SwiperSlide>
                    <OilArticleSlider title="روغن موتور الف 6 لیتر" link="3" />
                </SwiperSlide>
                <SwiperSlide>
                    <OilArticleSlider title="روغن موتور الف 7 لیتر" link="4" />
                </SwiperSlide>
                <SwiperSlide>
                    <OilArticleSlider title="روغن موتور الف 8 لیتر" link="5" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
