import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';

const ComicItemFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  // TODO THIS PROBABLY CAN BE EXTRACTED TO A REDUX STATE
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="comic-add-to-favorite absolute h-8 w-8 rounded-full bg-white flex items-center justify-center top-2 right-2 z-10 shadow-sm">
      <button onClick={toggleFavorite}>
        {isFavorite ? (
          <HeartIcon className="h-6 w-6 text-red-500" />
        ) : (
          <HeartIconOutline className="h-6 w-6 text-gray-500" />
        )}
      </button>
    </div>
  );
};

export default ComicItemFavorite;
