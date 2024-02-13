import Link from "next/link";
import Button from "../../../../src/components/button";
import CartItem from "../../../../src/components/cart-item";
import MainCheckout from "../../../../src/components/layouts/main-checkout";

function Main() {
  return (
    <MainCheckout>
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
            <Link href="/design-checkout">
              <Button>Checkout</Button>
            </Link>
          </div>
        </section>
      </div>
    </MainCheckout>
  );
}

export default Main;
