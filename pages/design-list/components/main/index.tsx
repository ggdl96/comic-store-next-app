import ComicSliderItem from "../../../../src/components/comic-slider-item";

function Main() {
  return (
    <main className="p-2 sd:p-4">
      <section>
        <div>Results for: data</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2 py-2">
          <ComicSliderItem color="emerald" width="full" />
          <ComicSliderItem color="gray" width="full" />
          <ComicSliderItem color="emerald" width="full" />
          <ComicSliderItem color="red" width="full" />
          <ComicSliderItem color="gray" width="full" />
          <ComicSliderItem color="emerald" width="full" />
          <ComicSliderItem color="yellow" width="full" />
          <ComicSliderItem color="emerald" width="full" />
          <ComicSliderItem color="gray" width="full" />
          <ComicSliderItem color="emerald" width="full" />
          <ComicSliderItem color="red" width="full" />
          <ComicSliderItem color="gray" width="full" />
          <ComicSliderItem color="emerald" width="full" />
          <ComicSliderItem color="yellow" width="full" />
        </div>
      </section>
    </main>
  );
}

export default Main;
