import { useDispatch } from 'react-redux';
import { addComicItemToCart } from '../../features/cart';
import { ComicItemDetail } from '../../model/components/ComicItemDetail';
import { AppDispatch } from '../../store';
import Button from '../button';

const ButtonAddToCart = ({ comic }: { comic: ComicItemDetail }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Button
      className="add-to-cart-btn"
      onClick={function (): void {
        dispatch(addComicItemToCart(comic));
      }}>
      Add to cart
    </Button>
  );
};

export default ButtonAddToCart;
