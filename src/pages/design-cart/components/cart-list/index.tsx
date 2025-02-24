import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Button from '../../../../components/button';
import CartItem from '../../../../components/cart-item';
import { removeComicItemFromCart } from '../../../../features/cart';
import { ComicItemCart } from '../../../../model/components/ComicItemCart';
import { AppDispatch } from '../../../../store';

interface PropsCartList {
  comicsInCart: ComicItemCart[];
  currency: string;
  price: number;
}

function CartList({ comicsInCart, currency, price }: PropsCartList) {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <section className="cart-item-list">
        {comicsInCart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onDelete={() => {
              dispatch(removeComicItemFromCart(item.id));
            }}
          />
        ))}
      </section>
      <section>
        <div className="flex flex-row justify-end py-4">
          <span className="cart-total-cost">
            total: ({currency}){price}
          </span>
        </div>
      </section>
      <section className="flex flex-row justify-center">
        <div className="w-full sm:w-3/5 md:w-6/12 lg:w-5/12 xl:w-3/12">
          <Button
            className="checkout-button"
            onClick={() => {
              router.push('/design-checkout');
            }}>
            Checkout
          </Button>
        </div>
      </section>
    </>
  );
}

export default CartList;
