import Link from "next/link";

interface Props {
  color?: string;
}

const ComicSliderItem = ({ color }: Props) => {
  return (
    <Link href="design-detail">
      <div className={`flex-none bg-${color}-500 w-36 sd:w-36 md:w-64 lg:w-96 h-full`}></div>
    </Link>
  );
};

ComicSliderItem.defaultProps = {
  color: "gray",
};

export default ComicSliderItem;
