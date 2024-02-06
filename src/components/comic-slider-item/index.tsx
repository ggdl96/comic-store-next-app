interface Props {
  color?: string;
}

const ComicSliderItem = ({ color }: Props) => {
  return (
    <div className={`flex-none bg-${color}-500 w-36 sd:w-36 md:w-64 lg:w-96 h-full`}></div>
  );
};

ComicSliderItem.defaultProps = {
  color: "gray",
};

export default ComicSliderItem;
