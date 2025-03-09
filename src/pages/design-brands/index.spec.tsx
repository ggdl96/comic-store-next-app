import { render } from '@testing-library/react';
import React from 'react';
import Main from '.';
import AppProvidersTest from '../../utils/test/app-providers-test';

describe('Desgin Brands Main component test', () => {
  test('should render properly', async () => {
    const { container } = render(
      <AppProvidersTest>
        <Main />
      </AppProvidersTest>,
    );

    const sectionTitle = await container.querySelector('.h3-brands');

    expect(sectionTitle?.textContent).toBe('Brands');
  });
});
