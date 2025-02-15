import { render, screen } from '@testing-library/react';
import React from 'react';
import Detail from '../../pages/design-detail/[id]';
import AppProvidersTest from '../../src/utils/test/app-providers-test';
import { useParams } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

(useParams as jest.Mock).mockReturnValue({ id: '123' });

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
