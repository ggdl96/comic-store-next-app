import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComicSliderItem from '.';

describe('ComicSliderItem', () => {
  it('given no color prop provided, it should render default background gray', async () => {
    const a = render(<ComicSliderItem />);

    const b = a.container.querySelector('div');

    expect(b?.className).toBe(
      'flex-none bg-gray-500 w-36 sd:w-36 md:w-64 lg:w-96 h-48 lg:h-96 md:h-72 sm:h-44',
    );
  });

  it('given color prop provided with a value of "red", it should render background red', async () => {
    const a = render(<ComicSliderItem color="red" />);

    const b = a.container.querySelector('div');
    expect(b?.className).toBe(
      'flex-none bg-red-500 w-36 sd:w-36 md:w-64 lg:w-96 h-48 lg:h-96 md:h-72 sm:h-44',
    );
  });

  it('given width prop provided with a value of "full", it should render it full width', async () => {
    const a = render(<ComicSliderItem color="red" width="full" />);

    const b = a.container.querySelector('div');
    expect(b?.className).toBe('flex-none bg-red-500 w-full h-48 lg:h-96 md:h-72 sm:h-44');
  });
});
