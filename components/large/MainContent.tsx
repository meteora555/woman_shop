import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

//Используем swiper для реализации слайдера, по документации прокидываем пропсы с настройками, объязательно прописать пропс модули!!!

const MainContent = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Swiper
          navigation={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            modifierClass: 'swiper-pagination',
          }}
          modules={[Autoplay, Pagination, Navigation]}
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
      <div className="warning">
        <p className="warning-text">
          Уважаемые посетители! Обратите внимание, наша компания производит только оптовые продажи
          (подробнее с условиями работы можно ознакомиться в разделе «Сотрудничество»)
        </p>
      </div>
      <section className="section">
        <div className="order">
          <h2 className="order-title">Заказ коллекции</h2>
        </div>
        <div className="order__list">
          <div className="order__item">
            <Image src="/content/order/1.png" height={510} width={475} alt="Order - 1" />
            <Image src="/content/order/1.png" height={510} width={475} alt="Order - 1" />
            <Image src="/content/order/1.png" height={510} width={475} alt="Order - 1" />
          </div>
        </div>
        <Link href={'/catalog'}>
          <h2 className="order-title">Категории</h2>
        </Link>
        <div className="category__list">
          <div className="category__list-big">
            <Image src="/content/order/category_1.png" height={600} width={700} alt="Order - 1" />
          </div>
          <div className="category__list-litle">
            <Image src="/content/order/category_3.png" height={510} width={475} alt="Order - 1" />
            <Image src="/content/order/category_5.png" height={510} width={475} alt="Order - 1" />
            <Image src="/content/order/category_4.png" height={510} width={475} alt="Order - 1" />
            <Image src="/content/order/category_2.png" height={510} width={475} alt="Order - 1" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
