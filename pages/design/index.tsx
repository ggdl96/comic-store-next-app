import Footer from '../../src/components/layouts/footer';
import Header from '../../src/components/layouts/header';
import MainContent from '../../src/components/main-content';
import ModalInfo from '../../src/components/modal-info';

function Design() {
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-col overflow-scroll">
        <ModalInfo />
        <div className="flex flex-1">
          <MainContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Design;
