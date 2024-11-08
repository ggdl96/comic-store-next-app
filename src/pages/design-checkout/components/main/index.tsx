import Button from '../../../../components/button';
import Input from '../../../../components/input';
import MainCheckout from '../../../../components/layouts/main-checkout';
import OrderSummaryItem from '../../../../components/order-summary-item';

function Main() {
  return (
    <MainCheckout>
      <div className="w-full md:w-5/6 lg:w-4/6 xl:w-1/2 lg:grid lg:grid-cols-2 gap-2">
        <section className="order-1 lg:order-2">
          <div className="py-2">
            <h2>Order Summary</h2>
          </div>
          <OrderSummaryItem />
          <div className="flex flex-row justify-end py-4">
            <span>total: $1234</span>
          </div>
        </section>
        <section className="w-full pb-6 order-2 lg:order-1">
          <div className="py-2">
            <h2>Contact Data</h2>
          </div>
          <div className="grid grid-rows-4 w-full pb-6 order-2 lg:order-1">
            <Input placeholder="Contact email" />
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
            <Input placeholder="Company name (optional)" />
          </div>
          <div className="flex flex-row justify-center">
            <div className="w-full">
              <Button>Pay Now</Button>
            </div>
          </div>
        </section>
      </div>
    </MainCheckout>
  );
}

export default Main;
