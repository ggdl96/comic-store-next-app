import { render, screen } from '@testing-library/react';
import HeaderSimple from '.';

describe('HeaderAbout test', () => {
  test('should render properly', async () => {
    render(<HeaderSimple title="About" />);

    const label = await screen.findAllByText('About');

    expect(label.length).toBe(1);
  });
});
