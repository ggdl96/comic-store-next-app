import Link from 'next/link';
import MainDefault from '../main-default';

function Header() {
  return (
    <header className="bg-white">
      <MainDefault>
        <nav
          className="flex flex-row items-center justify-between py-6 lg:py-8 col-span-8"
          aria-label="Global">
          <div className="sm:hidden">
            <h3>Menu</h3>
          </div>
          <div className="flex flex-row justify-between grow-0">
            <Link href="/design">
              <h1>comics</h1>
            </Link>
          </div>
          <div className="flex flex-row grow space-x-2 max-sm:hidden">
            <Link href="/design-list">
              <h2 className="text-xl">all</h2>
            </Link>
            <h2 className="text-xl">best sellers</h2>
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
