import { MouseEventHandler } from 'react';
import { ComicItemCart } from '../../model/components/ComicItemCart';
import WrapperImage from '../wrapper-image';
interface ItemQuantityProps {
  onAdd: () => void;
  onSubtract: () => void;
  quantity: number;
  stock: number;
}

function ItemQuantity({ onAdd, onSubtract, quantity, stock }: ItemQuantityProps) {
  const removeDisabled = quantity === 1;
  const addDisabled = quantity === stock;

  return (
    <div className="flex justify-end items-center">
      <button disabled={removeDisabled} className="cart-subtract-item p-2" onClick={onSubtract}>
        -
      </button>
      <p className="cart-item-quantity p-2">{quantity}</p>
      <button disabled={addDisabled} className="cart-add-item p-2" onClick={onAdd}>
        +
      </button>
    </div>
  );
}

interface Props {
  item: ComicItemCart;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onAdd: () => void;
  onSubtract: () => void;
}

function CartItem({ item, onDelete, onAdd, onSubtract }: Props) {
  return (
    <div className="cart-item w-full h-36 grid-rows-2 sm:grid-rows-1">
      <div className="grid grid-cols-12 w-full h-24 sm:h-36">
        <div className="bg-blue-500 col-span-3 sm:col-span-2 relative">
          <WrapperImage
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
          <ItemQuantity
            onAdd={onAdd}
            onSubtract={onSubtract}
            quantity={item.quantity}
            stock={item.stock}
          />
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
        <ItemQuantity
          onAdd={onAdd}
          onSubtract={onSubtract}
          quantity={item.quantity}
          stock={item.stock}
        />
        <button className="button-delete-item" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CartItem;
