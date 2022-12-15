import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Header, MainContent, Footer } from '../components';
import { CSSTransition } from 'react-transition-group';

// Используем состояния для отслеживания показа шапки и титульного текста,навешиваем при первом рендере обработчик движения мыши, после движения показывает шапку и текст
//Для плавной анимации используем rtg и csstransition, небольшой варнинг библиотека обращается напрямую к элементу, можно переписать используя useRef
export default function Home() {
  const [show, setShow] = useState(false);

  // В качестве тригера поставил в итоге движение мыши, скрол некорректно работает на мобилках

  React.useEffect(() => {
    document.body.addEventListener('mousemove', () => {
      setTimeout(() => {
        setShow(!show);
      }, 2000);
    });
  }, []);

  return (
    <div className="wrapper">
      <CSSTransition in={show} classNames="header" timeout={500} unmountOnExit>
        <Header />
      </CSSTransition>

      <MainContent />
      <Image
        className={!show ? 'mouse' : 'mouse-hide'}
        src="/content/icons/mouse.png"
        height={50}
        width={50}
        alt="mouse-icon"
      />
      <Footer />
    </div>
  );
}
