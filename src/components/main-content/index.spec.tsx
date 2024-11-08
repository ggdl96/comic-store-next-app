import OrderSummaryItem from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('OrderSummaryItem', () => {
  it('should render properly', async () => {
    render(<OrderSummaryItem />);
  });
});
