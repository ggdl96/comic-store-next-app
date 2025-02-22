import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

function MainCheckout({ children }: Props) {
  return (
    <main className="p-4 sd:p-6 md:p-8 lg:p-12 xl:p-24 flex flex-row justify-center w-full">
      {children}
    </main>
  );
}

export default MainCheckout;
