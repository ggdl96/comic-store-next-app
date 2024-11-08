import Link from 'next/link';

interface Props {
  color?: string;
  width?: 'full' | 'default';
}

const defaultWidth = 'w-36 sd:w-36 md:w-64 lg:w-96';

const ComicSliderItem = ({ color = 'gray', width = 'default' }: Props) => {
  return (
    <Link href="design-detail">
      <div
        className={`flex-none bg-${color}-500 ${
          width === 'default' ? defaultWidth : 'w-full'
        } h-48 lg:h-96 md:h-72 sm:h-44`}></div>
    </Link>
  );
};

export default ComicSliderItem;
