import { MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDisplay } from '../../../features/aboutInfo';
import { AppDispatch } from '../../../store';
import InternalLink from '../../internal-link';
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
            <InternalLink href="/design-list">All</InternalLink>
          </section>
          <section className="flex">
            <InternalLink href="/design-brands">Brands</InternalLink>
          </section>
          <section className="flex">
            <InternalLink href="/design-policy">Policy</InternalLink>
          </section>
          <section className="flex">
            <button onClick={handleOnClickContact}>
              <h3 className="text-font-main-dark font-normal">Contact</h3>
            </button>
          </section>
          <section className="flex">
            <InternalLink href="/design-about">About</InternalLink>
          </section>
        </div>
      </MainDefault>
    </footer>
  );
};

export default Footer;
