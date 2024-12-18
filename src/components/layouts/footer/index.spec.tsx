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

    const labelAll = await screen.findAllByText('All');
    const labelContact = await screen.findAllByText('Contact');
    const labelAbout = await screen.findAllByText('About');
    const labelBrands = await screen.findAllByText('brands');
    const labelPolicy = await screen.findAllByText('Policy');

    expect(labelAll.length).toBe(1);
    expect(labelContact.length).toBe(1);
    expect(labelAbout.length).toBe(1);
    expect(labelBrands.length).toBe(1);
    expect(labelPolicy.length).toBe(1);
  });
});
