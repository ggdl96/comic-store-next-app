import Button from "../../../../src/components/button";
import CartItem from "../../../../src/components/cart-item";

function Main() {
  return (
    <main className="p-2 sd:p-4 md:p-6 lg:p-12 xl:p-24 flex flex-row justify-center">
      <div className="w-full md:w-5/6 lg:w-4/6 xl:w-1/2">
        <section>
          <CartItem />
          <CartItem />
        </section>
        <section>
          <div className="flex flex-row justify-end py-4">
            <span>total: $1234</span>
          </div>
        </section>
        <section className="flex flex-row justify-center">
          <div className="w-full sm:w-3/5 md:w-6/12 lg:w-5/12 xl:w-3/12">
            <Button>Checkout</Button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Main;
