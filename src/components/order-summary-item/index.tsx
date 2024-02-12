function OrderSummaryItem() {
  return (
    <div className="w-full grid-rows-2 sm:grid-rows-1">
      <div className="grid grid-cols-12 w-full h-24 sm:h-36">
        <div className="bg-blue-500 col-span-3 grid grid-rows-2 grid-cols-2">
          <div className="bg-green-600"></div>
          <div className="bg-yellow-600"></div>
          <div className="bg-brown-600"></div>
          <div className="bg-orange-600"></div>
        </div>
        <div className="bg-red-500 col-span-5">
          <h3>{'(x) Products'}</h3>
        </div>
        <div className="bg-gray-500 col-span-4 flex flex-row justify-end">
          <span>price: $1234</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummaryItem;
