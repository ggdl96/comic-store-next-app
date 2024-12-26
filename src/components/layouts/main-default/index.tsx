import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  emptyBackgroundColorClass?: string;
  mainBackgroundColorClass?: string;
}

function MainDefault({
  children,
  emptyBackgroundColorClass = '',
  mainBackgroundColorClass = '',
}: Readonly<Props>) {
  const emptySpaceClasses = `row-start-1 col-span-0 lg:col-span-2 ${emptyBackgroundColorClass}`;

  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-2 w-full">
      <div className={emptySpaceClasses}></div>
      <div
        className={`row-start-1 col-span-12 lg:col-span-8 pl-8 pr-8 lg:pl-4 lg:pr-4 ${mainBackgroundColorClass}`}>
        {children}
      </div>
      <div className={emptySpaceClasses}></div>
    </div>
  );
}

export default MainDefault;
