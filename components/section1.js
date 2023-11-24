import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function section1() {
  SwiperCore.use(Autoplay);
  return (
    <section className="">
      <div className="md:px-15 -z-10">
        <Swiper
          // install Swiper modules
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
          }}
        >
          <SwiperSlide>{Slide1()}</SwiperSlide>
          <SwiperSlide>{Slide2()}</SwiperSlide>
          <SwiperSlide>{Slide3()}</SwiperSlide>
          <SwiperSlide>{Slide4()}</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

function Slide1() {
  return (
    <div className="grid">
      <div className="">
        <Link href="">
          <img
            src={
              'https://web.bookandlink.com/wp-content/uploads/2022/04/all-together.jpg'
            }
          />
        </Link>
      </div>
    </div>
  );
}

function Slide2() {
  return (
    <div className="grid">
      <div className="">
        <Link href="">
          <img
            src={
              'https://web.bookandlink.com/wp-content/uploads/2020/04/banner-image-bookandlink2.jpg'
            }
          />
        </Link>
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="grid">
      <div className="">
        <Link href="">
          <img
            src={
              'https://web.bookandlink.com/wp-content/uploads/2020/04/banner-image-bookandlink3.jpg'
            }
          />
        </Link>
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="grid">
      <div className="">
        <Link href="">
          <img
            src={
              'https://web.bookandlink.com/wp-content/uploads/2020/04/main-image-bookandlink.png'
            }
          />
        </Link>
      </div>
    </div>
  );
}
