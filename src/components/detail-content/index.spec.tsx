import { render, screen } from '@testing-library/react';
import DetailContent from '.';
import AppProvidersTest from '../../utils/test/app-providers-test';

describe('DetailContent test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <DetailContent id={'xcvxcr4'} />
      </AppProvidersTest>,
    );

    const button = await screen.findAllByText('Add to cart');

    expect(button.length).toBe(1);
  });
});
