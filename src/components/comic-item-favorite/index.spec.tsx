import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComicItemFavorite from '.';

describe('ComicItemFavorite', () => {
  it('should render properly', async () => {
    const { container } = render(<ComicItemFavorite />);

    const elementQuery = () => container.querySelector('.comic-add-to-favorite');
    expect(elementQuery).not.toThrow();
    expect(elementQuery()?.tagName).toBeDefined();
  });
});
