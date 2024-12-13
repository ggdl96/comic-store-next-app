import { render, screen } from '@testing-library/react';
import React from 'react';
import DesignList from '../../pages/design-list';
import AppProvidersTest from '../../src/utils/test/app-providers-test';
describe('Desgin List page test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <DesignList />
      </AppProvidersTest>,
    );

    const label = await screen.findAllByText(/Results for:/);

    expect(label.length).toBe(1);
  });
});
