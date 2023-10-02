import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandName = () => {
  return (
    <div className="mx-4 md:mx-32 my-20">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={25}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          
        }}
        // loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner1.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner3.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner4.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner5.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner6.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner7.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/03/partner8.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BrandName;
