import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '../../../store';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function AppProvidersTest({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}
