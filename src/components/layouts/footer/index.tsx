import Link from 'next/link';
import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDisplay } from '../../../features/aboutInfo';
import { AppDispatch } from '../../../store';
import MainDefault from '../main-default';

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleOnClickContact: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(toggleDisplay());
  };

  return (
    <footer className="w-full space-x-2 bg-secondary-1000 py-6">
      <MainDefault>
        <div className="flex flex-row justify-between">
          <section className="flex">
            <Link href={'/design-list'} className="text-font-main-default dark:text-font-main-dark">
              All
            </Link>
          </section>
          <section className="flex">
            <h3>brands</h3>
          </section>
          <section className="flex">
            <Link href={'/design-policy'}>Policy</Link>
          </section>
          <section className="flex">
            <button onClick={handleOnClickContact}>
              <h3>Contact</h3>
            </button>
          </section>
          <section className="flex">
            <Link href={'/design-about'}>About</Link>
          </section>
        </div>
      </MainDefault>
    </footer>
  );
};

export default Footer;
