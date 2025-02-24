import { render, screen } from '@testing-library/react';
import React from 'react';
import MainBestsellers from '.';
import AppProvidersTest from '../../../../utils/test/app-providers-test';

describe('Design Bestsellers Main component test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <MainBestsellers />
      </AppProvidersTest>,
    );

    const label = await screen.findAllByText(/Bestsellers/);

    expect(label.length).toBe(1);
  });
});
