import { ReactElement } from "react";

interface Props {
    children: ReactElement;
}

function MainDefault({ children }: Props) {
  return (
    <main className="px-2 sm:px-4 md:px-6 lg:px-8">
        {children}
    </main>
  );
}

export default MainDefault;
