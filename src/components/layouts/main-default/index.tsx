import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

function MainDefault({ children }: Props) {
  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-2 w-full">
      <div className="row-start-1 col-span-0 lg:col-span-2"></div>
      <div className="row-start-1 col-span-12 lg:col-span-8 pl-8 pr-8 lg:pl-4 lg:pr-4">
        {children}
      </div>
      <div className="row-start-1 col-span-0 lg:col-span-2"></div>
    </div>
  );
}

export default MainDefault;
