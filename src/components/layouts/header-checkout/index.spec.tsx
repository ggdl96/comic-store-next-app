import { render, screen } from '@testing-library/react';
import HeaderCheckout from '.';

describe('HeaderCheckout test', () => {
  test('should render properly', async () => {
    render(<HeaderCheckout />);

    const label = await screen.findAllByText('Checkout');

    expect(label.length).toBe(1);
  });
});
