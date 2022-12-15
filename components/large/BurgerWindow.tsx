import Image from 'next/image';
import Link from 'next/link';

//можно отрефакторить, создать массив в котором будут категории, и сезоны, и потом пройти мепом и нормально отрендерить

export default function BurgerWindow() {
  return (
    <div className="BurgerWindow">
      <div className="categories">
        <ul>
          <li>
            <Link href={'/catalog/clothes'}>Зима 2022</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Весна 2022</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Осень 2022</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Зима 2021</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Весна 2021</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Осень 2021</Link>
          </li>
        </ul>
        <h2 className="categories__items">Категории</h2>
        <ul>
          <li>
            <Link href={'/catalog/clothes'}>Джинсы</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Свитшоты</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Футболки</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Топы и майки</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Блузы</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Платья</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Юбки</Link>
          </li>
          <li>
            <Link href={'/catalog/clothes'}>Брюки</Link>
          </li>
        </ul>
      </div>
      <div className="BurgerWindow__img">
        <Link href={'/catalog/clothes'}>
          <Image
            src="/content/catalog/sweetshpot-1.jpg"
            height={400}
            width={380}
            alt="BurgerWindow__img"
          />
        </Link>
      </div>
    </div>
  );
}
