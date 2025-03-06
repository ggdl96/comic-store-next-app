import { useRouter } from 'next/router';
import { ComicItem } from '../../model/components/ComicItem';
import ComicRating from '../comic-rating';
import ComicItemFavorite from '../comic-item-favorite';
import ButtonAddToCart from '../button-add-to-cart';
import WrapperImage from '../wrapper-image';

interface Props {
  item?: ComicItem;
}

const ComicSliderItem = ({
  item = {
    id: 'xcfgdf34g7hklk',
    image: '/comic-cyberpunk-1.png',
    title: 'Title of the Comic',
    author: 'Some good Author',
    price: {
      value: 12345,
      currency: 'USD',
    },
    category: 'Classic',
    rating: 3,
    stock: 1,
  },
}: Props) => {
  const router = useRouter();
  const wrapperImageId = `wrapperItemImage-${item.title}`;

  const handleOnPress = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === wrapperImageId || event.currentTarget === event.target) {
      router.push('/design-detail/1234abc');
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-full h-[92vw] sm:h-[30vw] md:h-[28vw] lg:h-[26vw] xl:h-[24vw] col-span-1 border-primary-1000 border-2 p-2">
      <div className="text-right grow-0">
        <p className="text-xs sm:hidden">{item.category}</p>
      </div>
      <div className="w-full sm:w-1/2 h-full relative grow-1">
        <ComicItemFavorite />
        <div className="rating-container-mobile sm:hidden flex flex-row justify-end w-full absolute bottom-2 z-10">
          <ComicRating rating={item.rating} />
        </div>
        <button
          id={wrapperImageId}
          className="w-full h-full flex flex-col z-8 items-center"
          onClick={handleOnPress}>
          <WrapperImage
            src={item.image}
            alt={item.title}
            className="object-contain max-h-full relative object-top"
            fill
          />
        </button>
      </div>
      <div className="w-full sm:w-1/2 grid-flow-col text-right grow-3 pt-2 sm:pt-0">
        <p className="hidden sm:block text-xs">{item.category}</p>
        <p className="font-bold">{item.title}</p>
        <p className="italic text-xs">{item.author}</p>
        <div className="rating-container-desktop hidden sm:flex flex-row justify-end w-full py-1 lg:py-2">
          <ComicRating rating={item.rating} />
        </div>
        <div className="flex items-center justify-end">
          <div className="sm:hidden">
            <ButtonAddToCart comic={{ ...item, quantity: 1 }} text="Cart" />
          </div>
          <p className="text-xs text-blue-500 mr-2">({item.price.currency})</p>
          <p className="font-bold text-lg lg:text-3xl">{item.price.value}</p>
        </div>
        <div className="hidden sm:flex flex-row justify-end py-2 lg:py-4">
          <ButtonAddToCart comic={{ ...item, quantity: 1 }} text="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default ComicSliderItem;
