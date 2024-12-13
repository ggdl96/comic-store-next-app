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
    <footer className="w-full space-x-2 bg-blue-400 py-6">
      <MainDefault>
        <div className="flex flex-row justify-between">
          <section className="flex">
            <h3>all</h3>
          </section>
          <section className="flex">
            <h3>brands</h3>
          </section>
          <section className="flex">
            <h3>policy</h3>
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
