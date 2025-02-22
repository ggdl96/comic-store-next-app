import { render } from '@testing-library/react';
import Header from '.';
import AppProvidersTest from '../../../utils/test/app-providers-test';

describe('Header test', () => {
  test('should render properly', async () => {
    const renderResult = render(
      <AppProvidersTest>
        <Header />
      </AppProvidersTest>,
    );

    const label = await renderResult.findAllByText('Menu');

    expect(label.length).toBe(1);
  });
});
