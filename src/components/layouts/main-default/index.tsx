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
  const leftMarginClasses = `main-default__left-margin lg:row-start-1 col-span-0 lg:col-span-2 ${emptyBackgroundColorClass}`;
  const contentClasses = `main-default__content row-start-1 col-span-12 lg:col-span-8 px-2 sm:px-3 md:px-4 ${mainBackgroundColorClass}`;
  const rightMarginClasses = `main-default__right-margin lg:row-start-1 col-span-0 lg:col-span-2 ${emptyBackgroundColorClass}`;

  return (
    <div className="main-default__container grid grid-cols-12 grid-rows-1 gap-2 w-full">
      <div className={leftMarginClasses}></div>
      <div className={contentClasses}>{children}</div>
      <div className={rightMarginClasses}></div>
    </div>
  );
}

export default MainDefault;
