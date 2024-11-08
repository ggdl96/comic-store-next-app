import Link from 'next/link';
import { useRouter } from 'next/router';

function HeaderCheckout() {
  const router = useRouter();

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex flex-row max-w-9xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
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
            <h1>comics</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default HeaderCheckout;
