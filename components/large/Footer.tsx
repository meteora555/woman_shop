import Link from 'next/link';
import Image from 'next/image';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="footer__about">
          <h2 className="footer__about-title">о ANTONETTI</h2>
          <p className="footer__about-text">
            Бренд открывает секрет настоящей женственности, создавая модную, стильную и женственную
            одежду. Сочетание утонченного классического стиля и ярких оригинальных деталей позволяет
            создавать неповторимые образы. Одежда для настоящей женщины – нежной и заботливой дома,
            успешной и активной на работе, обладающей безупречным вкусом и тонким чувством
            прекрасного, стремящейся к красоте и внутренней гармонии.
          </p>
          <p className="footer__about-text">
            Одежда для женщины – это отражение её характера и настроения, внутреннего мира и
            неповторимого вкуса. Позвольте себе быть красивой каждый день, с удовольствием выходить
            из дома в любую погоду и радоваться своему отражению в зеркале.
          </p>
        </div>
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__item-link" href="/about">
                Важная информация
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__item-link" href="/about">
                Помощь
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__item-link" href="/about">
                Доставка
              </Link>
            </li>
            <li className="footer__item">
              <Link className="footer__item-link" href="/about">
                Наша команда
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__social">
          <ul className="footer__social-list">
            <li className="footer__social-item">
              <Link className="footer__social-link" href="/about">
                Telegram
                <Image
                  className="footer__social-img"
                  src="/content/icons/telegram.png"
                  height={32}
                  width={32}
                  alt="telegram-icon"
                />
              </Link>
            </li>
            <li className="footer__social-item">
              <Link className="footer__social-link" href="/about">
                Вконтаке
                <Image
                  className="footer__social-img"
                  src="/content/icons/vk.png"
                  height={32}
                  width={32}
                  alt="vk-icon"
                />
              </Link>
            </li>
            <li className="footer__social-item">
              <Link className="footer__social-link" href="/about">
                Instagram
                <Image
                  className="footer__social-img"
                  src="/content/icons/insta.png"
                  height={32}
                  width={32}
                  alt="insta-icon"
                />
              </Link>
            </li>
            <li className="footer__social-item"></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
