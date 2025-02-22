import { render, screen } from '@testing-library/react';
import Main from '.';
import AppProvidersTest from '../../../../utils/test/app-providers-test';

describe('Desgin Cart Main component test', () => {
  test('should render display empty cart if no items in cart', async () => {
    render(
      <AppProvidersTest>
        <Main />
      </AppProvidersTest>,
    );

    const label = await screen.findAllByText(/Empty Cart/);

    expect(label.length).toBe(1);
  });
});
