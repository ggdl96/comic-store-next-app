import { render, screen } from '@testing-library/react';
import React from 'react';
import MainBestsellers from '.';

describe('Design Bestsellers Main component test', () => {
  test('should render properly', async () => {
    render(<MainBestsellers />);

    const label = await screen.findAllByText(/Bestsellers/);

    expect(label.length).toBe(1);
  });
});
