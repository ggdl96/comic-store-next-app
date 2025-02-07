import Link from 'next/link';
import ComicSliderItem from '../comic-slider-item';
import MainContentLayout from '../layouts/main-default';

const MainContent = () => {
  return (
    <MainContentLayout emptyBackgroundColorClass="bg-empty">
      <main>
        <div className="flex flex-row h-32 sm:h-96 space-x-2">
          <Link className="bg-yellow-500 w-6/12 h-full" href="/design-highlights/a1234">
            <div></div>
          </Link>
          <Link href="/design-highlights/a1234" className="bg-red-500 w-6/12 h-full">
            <div></div>
          </Link>
        </div>
        <div className="overflow-x-auto overscroll-auto py-4">
          <div className="flex flex-row h-full space-x-2 grow">
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
          </div>
        </div>
        <div className="overflow-x-auto overscroll-auto py-4">
          <div className="flex flex-row h-full space-x-2 grow">
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
            <ComicSliderItem />
          </div>
        </div>
      </main>
    </MainContentLayout>
  );
};

export default MainContent;
