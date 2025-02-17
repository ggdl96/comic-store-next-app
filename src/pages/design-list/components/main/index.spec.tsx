import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from '.';
import AppProvidersTest from '../../../../utils/test/app-providers-test';

describe('Desgin List Main component test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <Main />
      </AppProvidersTest>,
    );

    const label = await screen.findAllByText(/Results for:/);

    expect(label.length).toBe(1);
  });
});
