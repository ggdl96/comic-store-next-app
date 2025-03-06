import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { comicDetails, setComicItem } from '../../features/comic-details';
import Button from '../button';
import ButtonAddToCart from '../button-add-to-cart';
import ComicItemFavorite from '../comic-item-favorite';
import ComicRating from '../comic-rating';
import WrapperImage from '../wrapper-image';
import MainDefault from '../layouts/main-default';

interface Props {
  id: string;
}

function DetailContent({ id }: Props) {
  const dispatch = useDispatch();
  const item = useSelector(comicDetails(id));

  useEffect(() => {
    dispatch(
      setComicItem({
        id: id,
        image: '/comic-cyberpunk-2-side.png',
        title: 'Comic Title',
        author: 'Unknown Author',
        price: {
          value: 123,
          currency: 'USD',
        },
        category: 'Generic Category',
        rating: 5,
        description: 'This is a normal description',
        stock: 12,
      }),
    );
  }, [dispatch, id]);

  if (!item) {
    return null;
  }

  return (
    <MainDefault emptyBackgroundColorClass="bg-empty">
      <div className="detail-body">
        <div className="flex col-span-2 py-2 justify-between">
          <h3>{item.category}</h3>
          <div className="sm:hidden flex justify-end items-center">
            <ComicRating rating={item.rating} />
          </div>
        </div>
        <div className="grid grid-rows-2 w-full sm:grid-rows-none sm:grid-cols-2">
          <section className="bg-orange-300 h-96 relative col-span-2 sm:col-span-1">
            <div className="sm:hidden col-span-2 py-4 flex justify-end items-center relative">
              <ComicItemFavorite />
            </div>
            <WrapperImage
              src={item.image}
              alt={item.title}
              fill
              className="max-h-full object-center object-contain"
            />
          </section>
          <section className="bg-gray-300 h-96 grid grid-rows-7 p-2 col-span-2 sm:col-span-1">
            <div className="row-span-3 grid grid-rows-4 sm:grid-cols-2">
              <div className="hidden col-span-2 py-4 sm:flex justify-end items-center relative">
                <ComicItemFavorite />
              </div>
              <div className="hidden col-span-0 sm:block sm:col-span-2">
                <h1 className="sm:h1 sm:inline text-2xl font-bold">{item?.title}</h1>
              </div>
              <div className="text-right col-span-2">
                <h2 className="h2 sm:h1 text-xl font-semibold">
                  ({item?.price?.currency}) {item?.price?.value}
                </h2>
              </div>
              <div className="col-span-2 sm:hidden sm:col-span-0">
                <h2 className="h2 sm:h1 text-2xl font-bold">{item?.title}</h2>
              </div>
              <div className="col-span-2 text-right">
                <h3 className="h2 sm:h1 text-sm italic">{item.author}</h3>
              </div>
            </div>
            <div className="hidden sm:flex justify-end items-center">
              <ComicRating rating={item.rating} />
            </div>
            <div>
              <h3>Variants</h3>
            </div>
            <div className="grid grid-rows-2 row-span-2">
              <div className="flex py-2">
                <ButtonAddToCart comic={{ ...item, quantity: 1 }} />
              </div>
              <div className="flex py-2">
                <Button className="buy-now-btn" onClick={function (): void {}}>
                  Buy now
                </Button>
              </div>
            </div>
          </section>
          <section className="col-span-2">
            <div className="p-2">
              <h3 className="font-semibold">Description</h3>
              <p>{item.description}</p>
            </div>
          </section>
        </div>
      </div>
    </MainDefault>
  );
}

export default DetailContent;
