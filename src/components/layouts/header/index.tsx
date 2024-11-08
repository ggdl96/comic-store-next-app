import Link from 'next/link';

function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex flex-row max-w-9xl items-center justify-between p-6 lg:px-8"
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
    </header>
  );
}

export default Header;
