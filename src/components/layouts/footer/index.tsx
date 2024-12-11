import MainDefault from '../main-default';

const Footer = () => {
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
            <h3>about me</h3>
          </section>
        </div>
      </MainDefault>
    </footer>
  );
};

export default Footer;
