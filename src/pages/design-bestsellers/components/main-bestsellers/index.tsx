import ComicSliderItem from '../../../../components/comic-slider-item';
import MainDefault from '../../../../components/layouts/main-default';
import { COMIC_LIST } from '../../../../../__mocks__/data/comics';
import ContainerComics from '../../../../components/container-comics';

function MainBestsellers() {
  return (
    <MainDefault emptyBackgroundColorClass="bg-empty">
      <section>
        <h1>Bestsellers</h1>
        <div className="flex flex-col w-full items-center">
          <div className="w-full flex flex-row justify-start pb-4 pt-2">
            <h2>All Time</h2>
          </div>
          <ContainerComics comicList={[...COMIC_LIST]} />
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-full flex flex-row justify-start pb-4 pt-2">
            <h2>Past Year</h2>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 py-2">
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-full flex flex-row justify-start pb-4 pt-2">
            <h2>Past Month</h2>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 py-2">
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
          </div>
        </div>
      </section>
    </MainDefault>
  );
}

export default MainBestsellers;
