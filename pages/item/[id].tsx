import { useRouter } from 'next/router';

const Item = (): JSX.Element => {
  const router = useRouter();

  return <h1>item {router.query.id}</h1>;
};

export default Item;

// Отказался от реализации показа каждой карточки,возможно сделаю в дальнейшем.
