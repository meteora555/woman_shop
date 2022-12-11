import Image from 'next/image';
import Link from 'next/link';

//можно отрефакторить, создать массив в котором будут категории, и сезоны, и потом пройти мепом и нормально отрендерить

export default function ModalAside() {
  return (
    <div className="modalAside">
      <div className="categories">
        <h2 className="modalAside__title">ПРОСМОТР КОЛЛЕКЦИЙ</h2>
        <ul>
          <li>
            <Link href={'/catalog'}>Зима 2022</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Весна 2022</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Осень 2022</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Зима 2021</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Весна 2021</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Осень 2021</Link>
          </li>
        </ul>
        <h2 className="categories__items">Категории</h2>
        <ul>
          <li>
            <Link href={'/catalog'}>Джинсы</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Свитшоты</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Футболки</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Топы и майки</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Блузы</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Платья</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Юбки</Link>
          </li>
          <li>
            <Link href={'/catalog'}>Брюки</Link>
          </li>
        </ul>
      </div>
      <div className="modalAside__img">
        <Image
          src="/content/aside/collection-1.png"
          height={500}
          width={600}
          alt="modalAside__img"
        />
      </div>
    </div>
  );
}
