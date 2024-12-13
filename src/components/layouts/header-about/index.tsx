import Link from 'next/link';
import MainDefault from '../main-default';

function HeaderAbout() {
  return (
    <header className="bg-white">
      <MainDefault>
        <nav className="flex flex-row items-center justify-between py-6" aria-label="Global">
          <div className="flex flex-row justify-between grow-0">
            <Link href="/design">
              <h1>comics</h1>
            </Link>
          </div>
          <div className="flex flex-row justify-center grow">
            <Link href="/design">
              <h1>About</h1>
            </Link>
          </div>
        </nav>
      </MainDefault>
    </header>
  );
}

export default HeaderAbout;
