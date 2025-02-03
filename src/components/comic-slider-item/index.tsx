import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';

interface Props {
  color?: string;
  width?: 'full' | 'default';
}

const defaultWidth = 'w-36 sd:w-36 md:w-64 lg:w-96';

const ComicSliderItem = ({ color = 'gray', width = 'default' }: Props) => {
  return (
    <div
      className={`flex bg-${color}-500 ${
        width === 'default' ? defaultWidth : 'w-full'
      } h-48 lg:h-96 md:h-72 sm:h-44 border-primary-1000 border-2 p-2`}>
      <div className="flex flex-row w-full">
        <Link className="w-1/2 h-full" href="/design-detail/1234abc">
          <Image src={''} alt={''} className="w-full h-full" />
        </Link>
        <div
          className="w-1/2 grid-flow-col text-right"
          style={{
            backgroundColor: 'brown',
          }}>
          <p className="text-sm">Category</p>
          <p className="font-bold text-lg">TITLE</p>
          <p className="italic">author</p>
          <div className="flex flex-row justify-end w-full py-2">
            <StarIcon className="size-6 text-blue-500" />
            <StarIcon className="size-6 text-blue-500" />
            <StarIcon className="size-6 text-blue-500" />
            <StarIcon className="size-6 text-blue-500" />
            <StarIcon className="size-6 text-blue-500" />
          </div>
          <p className="font-bold text-3xl">$ 12356</p>
          <div className="flex flex-row justify-end py-4">
            <button value="ADD TO CART" className="bg-primary-1000 text-white px-4 py-2 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicSliderItem;
