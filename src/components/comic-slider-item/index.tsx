import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

interface Props {
  // TODO: THIS HAS TO BE REQUIRED, FOR NOW IT WILL BE OPTIONAL
  item?: {
    image: string;
    title: string;
    author: string;
    price: {
      value: number;
      currency: string;
    };
    category: string;
    rating: number;
  };
}

const ComicSliderItem = ({
  item = {
    image: require('./test.png'),
    title: 'Title of the Comic',
    author: 'Some good Author',
    price: {
      value: 12345,
      currency: 'USD',
    },
    category: 'Classic',
    rating: 3,
  },
}: Props) => {
  return (
    <div
      className={`flex w-full h-[58vw] sm:h-[30vw] md:h-[28vw] lg:h-[26vw] xl:h-[24vw] col-span-1 border-primary-1000 border-2 p-2`}>
      <div className="flex flex-row w-full">
        <Link className="w-1/2 h-full" href="/design-detail/1234abc">
          <Image src={item.image} alt={item.title} className="object-contain max-h-full" />
        </Link>
        <div className="w-1/2 grid-flow-col text-right">
          <p className="text-sm">{item.category}</p>
          <p className="font-bold">{item.title}</p>
          <p className="italic">{item.author}</p>
          <div className="flex flex-row justify-end w-full py-1 lg:py-2">
            {item.rating > 0 ? (
              Array.from({ length: 5 }).map((rating, index) => {
                const cssClass = 'size-4 lg:size-6 text-blue-500';
                return index < item.rating ? (
                  <StarIcon
                    key={`itemRating_${rating}`}
                    className={`star-icon-solid ${cssClass}`}
                  />
                ) : (
                  <StarIconOutline
                    key={`itemRating_${rating}`}
                    className={`star-icon-outline ${cssClass}`}
                  />
                );
              })
            ) : (
              <p>No rating</p>
            )}
          </div>
          <p className="font-bold text-lg lg:text-3xl">
            {item.price.currency} {item.price.value}
          </p>
          <div className="flex flex-row justify-end py-1 lg:py-4">
            <button
              value="ADD TO CART"
              className="bg-primary-1000 text-white p-2 rounded-md text-sm">
              <p className="hidden lg:inline">ADD TO CART</p>
              <p className="lg:hidden">Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicSliderItem;
