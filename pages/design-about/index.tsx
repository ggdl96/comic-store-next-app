import Footer from '../../src/components/layouts/footer';
import HeaderSimple from '../../src/components/layouts/header-simple';
import MainDefault from '../../src/components/layouts/main-default';
import ModalInfo from '../../src/components/modal-info';

function Design() {
  return (
    <div>
      <HeaderSimple />
      <div className="w-full h-screen flex flex-col overflow-scroll">
        <ModalInfo />
        <div className="flex flex-1">
          <MainDefault>
            <div>
              <h2 className="text-xl">Comic Store is a website build with NextJS</h2>
              <br></br>
              <h3 className="text-lg">Techs</h3>
              <br></br>
              <p>NextJS</p>
              <p>TailwindCSS</p>
              <p>Jest, Testing Library</p>
              <p>Cypress</p>
              <p>Redux</p>
              <p>Sagas</p>
            </div>
          </MainDefault>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Design;
