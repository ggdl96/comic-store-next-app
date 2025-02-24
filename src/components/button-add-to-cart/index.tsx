import { useDispatch } from 'react-redux';
import { addComicItemToCart } from '../../features/cart';
import { ComicItemCart } from '../../model/components/ComicItemCart';
import { AppDispatch } from '../../store';
import Button from '../button';

const ButtonAddToCart = ({
  comic,
  text = 'Add to cart',
}: {
  comic: ComicItemCart;
  text?: string;
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClick = function (): void {
    dispatch(addComicItemToCart(comic));
  };

  if (comic.stock === 0) {
    return <p className="no-stock-label">No stock</p>;
  }

  return (
    <Button className="add-to-cart-btn" onClick={handleOnClick}>
      {text}
    </Button>
  );
};

export default ButtonAddToCart;
