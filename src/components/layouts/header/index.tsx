import Image from 'next/image';
import Link from 'next/link';
import MainDefault from '../main-default';
import { headerHeightClass, zIndexHeaderClass } from '../../../styles/layout';
function Header() {
  return (
    <header
      className={`header-top bg-white fixed w-full ${headerHeightClass}  ${zIndexHeaderClass} top-0 left-0 right-0`}>
      <MainDefault>
        <nav
          className="flex flex-row items-center justify-between py-6 lg:py-8 col-span-8 relative"
          aria-label="Global">
          <div className="sm:hidden">
            <h3>Menu</h3>
          </div>
          <div className="flex flex-row justify-between grow-0">
            <Link href="/design">
              <Image
                id="headerComicStoreLogo"
                src={require('../../../assets/svg/logo-image-header.svg')}
                alt={'Comic Store Logo'}
                width={70}
                height={70}
              />
            </Link>
          </div>
          <div className="flex flex-row grow space-x-2 max-sm:hidden">
            <Link href="/design-list">
              <h2 className="text-xl">all</h2>
            </Link>
            <Link href="/design-bestsellers">
              <h2 className="text-xl">best sellers</h2>
            </Link>
          </div>
          <div className="sm:hidden">
            <h3>Search M</h3>
          </div>
          <div className="flex flex-row grow-0 justify-end items-baseline">
            <h2 className="text-xl max-sm:hidden px-6">search</h2>
          </div>
          <div className="flex flex-row grow-0 justify-end items-baseline">
            <Link href="/design-cart">
              <h2>cart</h2>
            </Link>
          </div>
        </nav>
      </MainDefault>
    </header>
  );
}

export default Header;
