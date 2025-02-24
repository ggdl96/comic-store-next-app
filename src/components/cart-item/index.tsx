import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { ComicItemCart } from '../../model/components/ComicItemCart';

function ItemQuantity() {
  return <div className="flex justify-end">- 1 +</div>;
}

interface Props {
  item: ComicItemCart;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

function CartItem({ item, onDelete }: Props) {
  return (
    <div className="cart-item w-full h-36 grid-rows-2 sm:grid-rows-1">
      <div className="grid grid-cols-12 w-full h-24 sm:h-36">
        <div className="bg-blue-500 col-span-3 sm:col-span-2 relative">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="max-h-full object-center object-contain"
          />
        </div>
        <div className="bg-red-500 col-span-5 sm:col-span-4">
          <h3>{item.title}</h3>
        </div>
        <div className="hidden sm:grid sm:col-span-2 sm:grid-cols-2">
          <div></div>
          <ItemQuantity />
          <button onClick={onDelete}>Delete</button>
        </div>
        <div className="bg-gray-500 col-span-4 flex flex-row justify-end">
          <span>
            price: ({item.price.currency}){item.price.value}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:hidden">
        <div></div>
        <ItemQuantity />
        <button className="button-delete-item" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
