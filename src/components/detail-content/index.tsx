function DetailContent() {
  return (
    <main className="grid grid-rows-2 w-full sm:grid-rows-none sm:grid-cols-2">
      <section className="bg-orange-300 h-96">
        <div></div>
      </section>
      <section className="bg-gray-300 h-96 grid grid-rows-3 p-2">
        <div className="grid grid-rows-2 sm:grid-cols-2">
          <div className="hidden sm:block">
            <h1 className="sm:h1 sm:inline text-2xl font-bold">Title</h1>
          </div>
          <div>
            <h2 className="h2 sm:h1 text-xl font-semibold">$ 1234</h2>
          </div>
          <div className="sm:hidden">
            <h2 className="h2 sm:h1 text-2xl font-bold">Title</h2>
          </div>
        </div>
        <div>
          <h3>Variants</h3>
        </div>
        <div className="grid grid-rows-2">
          <div className="flex py-2">
            <button className="flex grow items-center justify-center bg-purple-400 p-4 rounded-xl w-full">
              Add to cart
            </button>
          </div>
          <div className="flex py-2">
            <button className="flex grow items-center justify-center bg-purple-400 p-4 rounded-xl w-full">
              Buy now
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className="p-2">
          <h3 className="font-semibold">Description</h3>
          <p>This is a normal description</p>
        </div>
      </section>
    </main>
  );
}

export default DetailContent;
