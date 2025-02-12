import LayoutDefault from '../../src/components/layouts/layout-default';
import MainDefault from '../../src/components/layouts/main-default';

function Design() {
  return (
    <LayoutDefault>
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
    </LayoutDefault>
  );
}

export default Design;
