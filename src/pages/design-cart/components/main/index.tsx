import { useSelector } from 'react-redux';
import MainCheckout from '../../../../components/layouts/main-checkout';
import {
  selectCartItems,
  selectTotalCartPrice,
  selectCartCurrency,
} from '../../../../features/cart';
import CartList from '../cart-list';

function Main() {
  const comicsInCart = useSelector(selectCartItems);
  const price = useSelector(selectTotalCartPrice);
  const currency = useSelector(selectCartCurrency);

  const comicList = Object.keys(comicsInCart).map(key => comicsInCart[key]);

  return (
    <MainCheckout>
      <div className="w-full md:w-5/6 lg:w-4/6 xl:w-1/2">
        {comicList.length === 0 ? (
          <section className="flex justify-center items-center">
            <p className="label-cart-empty">Empty Cart</p>
          </section>
        ) : (
          <CartList comicsInCart={comicList} currency={currency} price={price} />
        )}
      </div>
    </MainCheckout>
  );
}

export default Main;
