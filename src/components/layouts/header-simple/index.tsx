import Link from 'next/link';
import Image from 'next/image';

import MainDefault from '../main-default';
import { headerHeightClass, zIndexHeaderClass } from '../../../styles/layout';

function HeaderSimple({ title = '' }: { title?: string }) {
  return (
    <header className={`header-top-simple bg-white ${headerHeightClass} ${zIndexHeaderClass}`}>
      <MainDefault>
        <nav className="flex flex-row items-center justify-between py-6" aria-label="Global">
          <div className="flex flex-row justify-between grow-0">
            <Link href="/design">
              <Image
                id="headerComicStoreLogo"
                src={require('../../../assets/svg/logo-image-header.svg')}
                alt={'Comic Store Logo'}
                height={48}
              />
            </Link>
          </div>
          <div className="flex flex-row justify-center grow">
            <Link href="/design">
              <h1>{title}</h1>
            </Link>
          </div>
        </nav>
      </MainDefault>
    </header>
  );
}

export default HeaderSimple;
