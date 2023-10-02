import SectionTitle from "../../components/SectionTitle";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class ="${className} text-primary"></span>`;
    },
  };

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-5 mx-3 md:mx-16 pt-20">
      <div>
        <img
          src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/testimonial-left5.png"
          alt=""
        />
      </div>
      <div>
        <SectionTitle title={"TESTIMONIALS"} heading={"What Customer Saying"} />
        <p className="text-typography mb-10">
          Deliver beautiful emails that get opened and clicked every time.
          Personalized content to every subscriber Fully customizable templates
          the gioun
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          pagination={pagination}
          autoplay={true}
          loop={true}
        >
          <SwiperSlide
            style={{
              backgroundImage:
                "url('https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/quote-ico5.png')",
            }}
            className="bg-no-repeat shadow-lg px-3 md:px-10 py-6 md:py-12"
          >
            <p className="text-xl text-primary italic font-heading md:leading-relaxed">
              Worldwide engage phosfluorescently methodologies with in
              web-enabled technology. Interactively coordinate proactive
              e-commerce via.
            </p>
            <div className="flex items-center gap-7 mt-8">
              <img
                width={65}
                height={65}
                className="rounded-full"
                src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/01/testi5.jpg"
                alt=""
              />
              <div>
                <h2 className="font-heading font-bold text-lg">
                  Esther Howard
                </h2>
                <p className="font-heading text-typography">CEO & Founder</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                "url('https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/quote-ico5.png')",
            }}
            className="bg-no-repeat shadow-lg px-3 md:px-10 py-6 md:py-12"
          >
            <p className="text-xl text-primary italic font-heading md:leading-relaxed">
              Worldwide engage phosfluorescently methodologies with in
              web-enabled technology. Interactively coordinate proactive
              e-commerce via.
            </p>
            <div className="flex items-center gap-7 mt-8">
              <img
                width={65}
                height={65}
                className="rounded-full"
                src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/02/testi3.jpg"
                alt=""
              />
              <div>
                <h2 className="font-heading font-bold text-lg">
                  Esther Howard
                </h2>
                <p className="font-heading text-typography">CEO & Founder</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                "url('https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/quote-ico5.png')",
            }}
            className="bg-no-repeat shadow-lg px-3 md:px-10 py-6 md:py-12"
          >
            <p className="text-xl text-primary italic font-heading md:leading-relaxed">
              Worldwide engage phosfluorescently methodologies with in
              web-enabled technology. Interactively coordinate proactive
              e-commerce via.
            </p>
            <div className="flex items-center gap-7 mt-8">
              <img
                width={65}
                height={65}
                className="rounded-full"
                src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/02/testi1.jpg"
                alt=""
              />
              <div>
                <h2 className="font-heading font-bold text-lg">
                  Matthew Taylor
                </h2>
                <p className="font-heading text-typography">
                  SEO & Founder, Facebook
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              backgroundImage:
                "url('https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/05/quote-ico5.png')",
            }}
            className="bg-no-repeat shadow-lg px-3 md:px-10 py-6 md:py-12"
          >
            <p className="text-xl text-primary italic font-heading md:leading-relaxed">
              Worldwide engage phosfluorescently methodologies with in
              web-enabled technology. Interactively coordinate proactive
              e-commerce via.
            </p>
            <div className="flex items-center gap-7 mt-8">
              <img
                width={65}
                height={65}
                className="rounded-full"
                src="https://demo.rstheme.com/wordpress/tekone/wp-content/uploads/2023/02/testi2.jpg"
                alt=""
              />
              <div>
                <h2 className="font-heading font-bold text-lg">
                  Lynda Robards
                </h2>
                <p className="font-heading text-typography">
                  Company SEO, Google
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
