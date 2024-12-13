import { render, screen } from '@testing-library/react';
import HeaderAbout from '.';

describe('HeaderCheckout test', () => {
  test('should render properly', async () => {
    render(<HeaderAbout />);

    const label = await screen.findAllByText('Checkout');

    expect(label.length).toBe(1);
  });
});
