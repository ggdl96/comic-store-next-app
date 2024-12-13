import { render } from '@testing-library/react';
import React from 'react';
import DesignCart from '../../pages/design-cart';
import AppProvidersTest from '../../src/utils/test/app-providers-test';

describe('Desgin Cart page test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <DesignCart />
      </AppProvidersTest>,
    );
  });
});
