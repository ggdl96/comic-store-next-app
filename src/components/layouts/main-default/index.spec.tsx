import React from 'react';

import { render, screen } from '@testing-library/react';
import MainDefault from '.';

describe('MainDefault test', () => {
  test('should render properly', async () => {
    render(
      <MainDefault emptyBackgroundColorClass="bg-empty">
        <p>test</p>
      </MainDefault>,
    );

    const label = await screen.findAllByText('test');

    expect(label.length).toBe(1);
  });
});
