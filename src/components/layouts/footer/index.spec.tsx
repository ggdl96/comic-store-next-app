import { render, screen } from '@testing-library/react';
import Footer from '.';

import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import { store } from '../../../store';

describe('Footer test', () => {
  test('should render properly', async () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );

    const label = await screen.findAllByText('all');

    expect(label.length).toBe(1);
  });
});
