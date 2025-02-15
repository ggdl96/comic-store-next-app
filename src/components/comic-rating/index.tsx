import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';

interface Props {
  rating: number;
}

export default function ComicRating({ rating }: Props) {
  return rating > 0 ? (
    <div className="container-comic-rating flex items-center">
      {Array.from({ length: 5 }).map((_, index) => {
        const cssClass = 'size-5 lg:size-6 text-blue-500 shadow-xl';
        return index < rating ? (
          <StarIcon key={`itemRating_${index}`} className={`star-icon-solid ${cssClass} `} />
        ) : (
          <StarIconOutline
            key={`itemRating_${index}`}
            className={`star-icon-outline ${cssClass}`}
          />
        );
      })}
    </div>
  ) : null;
}
