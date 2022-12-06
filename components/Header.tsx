import Router, { useRouter } from 'next/router';
import Link from 'next/link';
import { url } from 'inspector';

const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <div className="header">
      <button onClick={() => Router.push('/')}>
        <a>logo</a>
      </button>
      <Link href={'/catalog'}>woman</Link>
      <Link href={'/catalog'}>man</Link>
      <Link href={'/catalog'}>сотруд</Link>
      <Link href={'/catalog'}>телефон</Link>
    </div>
  );
};

export default Header;
