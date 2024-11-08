import { render, screen } from '@testing-library/react';
import Main from '.';

describe('Desgin Cart Main component test', () => {
  test('should render properly', async () => {
    render(<Main />);

    const label = await screen.findAllByText(/total: /);

    expect(label.length).toBe(1);
  });
});
