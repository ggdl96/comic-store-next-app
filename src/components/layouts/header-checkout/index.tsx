import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MainDefault from '../main-default';
import { headerHeightClass, zIndexHeaderClass } from '../../../styles/layout';

function HeaderCheckout() {
  const router = useRouter();

  return (
    <header className={`header-top-checkout bg-white ${headerHeightClass} ${zIndexHeaderClass}`}>
      <MainDefault>
        <nav className="flex flex-row items-center justify-between py-6" aria-label="Global">
          <div>
            <button
              className="go-back-btn"
              onClick={() => {
                router.back();
              }}>
              <h3>Go back</h3>
            </button>
          </div>
          <div className="flex flex-row justify-center grow">
            <Link href="/design">
              <h1>Checkout</h1>
            </Link>
          </div>
          <div className="flex flex-row justify-between grow-0">
            <Link href="/design">
              <Image
                id="headerComicStoreLogo"
                src={require('../../../assets/svg/logo-image-header.svg')}
                alt={'Comic Store Logo'}
                width={70}
                height={70}
              />{' '}
            </Link>
          </div>
        </nav>
      </MainDefault>
    </header>
  );
}

export default HeaderCheckout;
