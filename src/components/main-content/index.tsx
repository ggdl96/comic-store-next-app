import ComicSliderItem from "../comic-slider-item";

const MainContent = () => {
  return (
    <main>
      <div className="flex flex-row h-32 sm:h-96 w-full space-x-2">
        <div className="bg-yellow-500 w-6/12 h-full"></div>
        <div className="bg-red-500 w-6/12 h-full"></div>
      </div>
      <div className="overflow-x-auto overscroll-auto py-4 w-full">
        <div className="flex flex-row h-full space-x-2 grow">
          <ComicSliderItem color="yellow" />
          <ComicSliderItem color="blue" />
          <ComicSliderItem color="red" />
          <ComicSliderItem color="yellow" />
          <ComicSliderItem color="blue" />
          <ComicSliderItem color="red" />
        </div>
      </div>
      <div className="overflow-x-auto overscroll-auto py-4 w-full">
        <div className="flex flex-row h-full space-x-2 grow">
          <ComicSliderItem color="green" />
          <ComicSliderItem color="gray" />
          <ComicSliderItem color="green" />
          <ComicSliderItem color="green" />
          <ComicSliderItem color="gray" />
          <ComicSliderItem color="green" />
          <ComicSliderItem color="green" />
          <ComicSliderItem color="gray" />
          <ComicSliderItem color="green" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
