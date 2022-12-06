import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

const MainContent = (): JSX.Element => {
  return (
    <div className="container">
      <Swiper
        navigation={true}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          modifierClass: 'swiper-pagination',
        }}
        className="mySwiper">
        <SwiperSlide>
          <Image src="/content/slider/1.png" height={700} width={1440} alt="MainSlider - 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/content/slider/2.png" height={700} width={1440} alt="MainSlider - 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/content/slider/3.png" height={700} width={1440} alt="MainSlider - 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/content/slider/4.png" height={700} width={1440} alt="MainSlider - 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainContent;
