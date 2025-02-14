import ComicSliderItem from '../../../../components/comic-slider-item';
import MainDefault from '../../../../components/layouts/main-default';

function MainBestsellers() {
  const data = [
    {
      id: 'xcfgdf34g7hklk',
      image: '/comic-cyberpunk-1.png',
      title: 'Cyberpunk Chronicles',
      author: 'Alice Johnson',
      price: {
        value: 9.99,
        currency: 'USD',
      },
      category: 'Classic',
      rating: 3,
    },
    {
      id: 'jklfd4453f34gf',
      image: '/comic-cyberpunk-2-side.png',
      title: 'Cyberpunk Chronicles 2.0',
      author: 'Alice Johnson',
      price: {
        value: 9.99,
        currency: 'USD',
      },
      category: 'Classic',
      rating: 3,
    },
    {
      id: 'h1a4a5b1f1',
      image: '/gaucho-specter-side.png',
      title: "Gaucho's tales",
      author: 'Gus G',
      price: {
        value: 9.75,
        currency: 'USD',
      },
      category: 'Fantasy',
      rating: 4,
    },
    {
      id: 'a1b2c3d4e5',
      image: '/samurai-specter-side.png',
      title: 'Mystic Manga',
      author: 'Brian Smith',
      price: {
        value: 12.5,
        currency: 'USD',
      },
      category: 'Action',
      rating: 4,
    },
    {
      id: 'f6g7h8i9j0',
      image: '/comic-adventure-3.png',
      title: "Hero's Quest",
      author: 'Charles Davis',
      price: {
        value: 7.99,
        currency: 'USD',
      },
      category: 'Adventure',
      rating: 5,
    },
    {
      id: 'k1l2m3n4o5',
      image: '/comic-fantasy-4.png',
      title: 'Fantasy Fables',
      author: 'Diana Evans',
      price: {
        value: 15.0,
        currency: 'USD',
      },
      category: 'Fantasy',
      rating: 4,
    },
    {
      id: 'p6q7r8s9t0',
      image: '/comic-superhero-5.png',
      title: 'Superhero Saga',
      author: 'Edward Kim',
      price: {
        value: 19.99,
        currency: 'USD',
      },
      category: 'Action',
      rating: 3,
    },
    {
      id: 'u1v2w3x4y5',
      image: '/comic-manga-6.png',
      title: 'Samurai Spirit',
      author: 'Fiona Lee',
      price: {
        value: 8.75,
        currency: 'USD',
      },
      category: 'Manga',
      rating: 4,
    },
  ];

  return (
    <MainDefault emptyBackgroundColorClass="bg-empty">
      <section>
        <h1>Bestsellers</h1>
        <div className="flex flex-col w-full items-center">
          <div className="w-full flex flex-row justify-start pb-4 pt-2">
            <h2>All Time</h2>
          </div>
          <div className="w-full grid grid-flow-row grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-2 py-2 justify-center">
            {data.map(item => (
              <ComicSliderItem key={`Bestsellers ${item.id}`} item={item} />
            ))}
          </div>
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
