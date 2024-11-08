import { render, screen } from '@testing-library/react';
import React from 'react';
import Main from '.';

describe('Desgin List Main component test', () => {
  test('should render properly', async () => {
    render(<Main />);

    const label = await screen.findAllByText(/Results for:/);

    expect(label.length).toBe(1);
  });
});
