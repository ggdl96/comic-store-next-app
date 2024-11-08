import ListComponent from './';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('List', () => {
  it('should display a list with at least one comic title', async () => {
    render(<ListComponent items={['item 1']} />);

    const foundOptions = await screen.findAllByText(/item /);

    expect(screen.queryByTestId('ul-list')).toBeTruthy();
    expect(foundOptions.length).toEqual(1);
  });

  it('should display a label when no comics', async () => {
    render(<ListComponent items={[]} />);

    const noResultsNode = await screen.findByText(/No results/);

    expect(screen.queryByTestId('ul-list')).toBeFalsy();
    expect(noResultsNode).toBeTruthy();
  });

  it('should display a list with more than one comic title', async () => {
    render(<ListComponent items={['item 1', 'item 2']} />);

    const foundOptions = await screen.findAllByText(/item /);

    expect(foundOptions.length).toEqual(2);
  });
});
