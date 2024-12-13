import { render } from '@testing-library/react';
import React from 'react';
import Design from '../../pages/design';
import AppProvidersTest from '../../src/utils/test/app-providers-test';

describe('Desgin component test', () => {
  test('should render properly', async () => {
    render(
      <AppProvidersTest>
        <Design />
      </AppProvidersTest>,
    );
  });
});
