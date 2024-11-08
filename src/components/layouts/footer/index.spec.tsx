import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer test', () => {
  test('should render properly', async () => {
    render(<Footer />);

    const label = await screen.findAllByText('all');

    expect(label.length).toBe(1);
  });
});
