import { render } from '@testing-library/react';
import Header from '.';

describe('Header test', () => {
  test('should render properly', async () => {
    const renderResult = render(<Header />);

    const label = await renderResult.findAllByText('Menu');

    expect(label.length).toBe(1);
  });
});
