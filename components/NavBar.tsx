import Image from 'next/image';

export default function NavBar() {
  return (
    <div className="bar">
      <div className="bar__filter">
        <ul className="bar__filter-list">
          <li className="bar__filter-item">
            <button className="bar__btn">
              <Image src="/content/icons/filter-btn.svg" height={25} width={25} alt="filter-icon" />
            </button>
            <p>ФИЛЬТРОВАТЬ</p>
          </li>
          <li className="bar__filter-item">
            <button className="bar__btn">
              <Image
                src="/content/icons/collection.svg"
                height={25}
                width={25}
                alt="collection-icon"
              />
            </button>
            <p>КОЛЛЕКЦИЯ</p>
          </li>
          <li className="bar__filter-item">
            <button className="bar__btn">
              <Image
                src="/content/icons/search-dark.svg"
                height={25}
                width={25}
                alt="filter-icon"
              />
            </button>
            <p>ПОИСК ПО АРТИКУЛУ</p>
          </li>
        </ul>
      </div>
      <div className="bar__sort">
        <p>Сортировка:</p>
      </div>
      <div className="sort__popup"></div>
      <div className="bar__cart">
        <button className="cart__btn">
          <Image src="/content/icons/cart-btn.png" height={37} width={37} alt="filter-icon" />
        </button>
        <b>0</b>
      </div>
    </div>
  );
}
