import { render, screen } from '@testing-library/react';
import HeaderAbout from '.';

describe('HeaderAbout test', () => {
  test('should render properly', async () => {
    render(<HeaderAbout />);

    const label = await screen.findAllByText('About');

    expect(label.length).toBe(1);
  });
});
