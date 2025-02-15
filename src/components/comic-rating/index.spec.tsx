import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComicRating from '.';

describe('ComicRating', () => {
  it('given 0 rating, it should not display stars', async () => {
    const { container } = render(<ComicRating rating={0} />);

    const element = container.querySelector('.container-comic-rating');

    expect(element).toBeNull();
  });

  it('given 1 rating, it not display 1 solid star and 4 outline stars', async () => {
    const { container } = render(<ComicRating rating={1} />);

    const elementIconsSolid = container.querySelectorAll('.star-icon-solid');
    const elementIconsOutline = container.querySelectorAll('.star-icon-outline');

    expect(elementIconsSolid).toHaveLength(1);
    expect(elementIconsOutline).toHaveLength(4);
  });

  it('given 5 rating, it should display 5 solid stars', async () => {
    const { container } = render(<ComicRating rating={5} />);

    const elementIconsSolid = container.querySelectorAll('.star-icon-solid');
    const elementIconsOutline = container.querySelectorAll('.star-icon-outline');

    expect(elementIconsSolid).toHaveLength(5);
    expect(elementIconsOutline).toHaveLength(0);
  });
});
