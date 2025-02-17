import { ComicItem } from '../../model/components/ComicItem';
import ComicSliderItem from '../comic-slider-item';

interface Props {
  comicList: ComicItem[];
}

const ContainerComics = ({ comicList }: Props) => {
  return (
    <div className="container-comics w-full grid grid-flow-row grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-2 py-2 justify-center">
      {comicList.map(item => (
        <ComicSliderItem key={`Bestsellers ${item.id}`} item={item} />
      ))}
    </div>
  );
};

export default ContainerComics;
