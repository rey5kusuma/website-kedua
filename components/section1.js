import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

export default function section1() {
  SwiperCore.use(Autoplay);

  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <Swiper
          // install Swiper modules
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
          <SwiperSlide>{Slide()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <img
          src={
            'https://web.bookandlink.com/wp-content/uploads/2020/04/banner-image-bookandlink3.jpg'
          }
          width={'1500'}
          height={'1200'}
        />
      </div>
    </div>
  );
}
