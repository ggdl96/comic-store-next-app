import Footer from '../../layouts/footer';
import Header from '../../layouts/header';
import ModalInfo from '../../modal-info';
import { headerHeightPx, mainContentTopClass } from '../../../styles/layout';

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ModalInfo />
      <Header />
      <div
        className={`layout-body-content w-full flex flex-col overflow-scroll ${mainContentTopClass} relative`}
        style={{
          height: `calc(100vh - ${headerHeightPx})`,
        }}>
        <div className="flex flex-1">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

export default LayoutDefault;
