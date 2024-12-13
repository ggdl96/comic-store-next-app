import { render, screen } from '@testing-library/react';
import React from 'react';
import Detail from '../../pages/design-detail/[index]';
import AppProvidersTest from '../../src/utils/test/app-providers-test';

describe('Desgin Detail component test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <Detail />
      </AppProvidersTest>,
    );

    const label = await screen.findAllByText(/Buy now/);

    expect(label.length).toBe(1);
  });
});
