import Image from 'next/image';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { OrderList, CategoriesList } from '../../components';

import 'swiper/scss';
import 'swiper/scss/pagination';

import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

//Используем swiper для реализации слайдера, по документации прокидываем пропсы с настройками, объязательно прописать пропс модули!!!
// Если будет время можно переписать на класс img и наследоваться от него

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
        <OrderList />
        <Link href={'/catalog/clothes'}>
          <h2 className="order-title">Категории</h2>
        </Link>
        <CategoriesList />
      </section>
    </>
  );
};

export default MainContent;
