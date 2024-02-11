function CartItem() {
  return (
    <div className="w-full h-36 grid-rows-2 sm:grid-rows-1">
      <div className="grid grid-cols-12 w-full h-24 sm:h-36">
        <div className="bg-blue-500 col-span-3 sm:col-span-2"></div>
        <div className="bg-red-500 col-span-5 sm:col-span-4">
          <h3>Title</h3>
        </div>
        <div className="hidden sm:grid sm:col-span-2 sm:grid-cols-2">
          <div></div>
          <div className="flex justify-end">- 1 +</div>
        </div>
        <div className="bg-gray-500 col-span-4 flex flex-row justify-end">
          <span>price: $1234</span>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:hidden">
        <div></div>
        <div className="flex justify-end">- 1 +</div>
      </div>
    </div>
  );
}

export default CartItem;
