import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComicSliderItem from '.';

describe('ComicSliderItem', () => {
  it('given 0 rating, it should not display stars', async () => {
    const { container } = render(
      <ComicSliderItem
        item={{
          image: '',
          title: 'title',
          author: 'author',
          price: {
            value: 112,
            currency: 'USD',
          },
          category: 'category',
          rating: 0,
        }}
      />,
    );

    const titleElement = screen.getByText('title');
    const authorElement = screen.getByText('author');
    const priceElement = screen.getByText('USD 112');
    const categoryElement = screen.getByText('category');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
    expect(container.querySelector('.star-icon-solid')).not.toBeInTheDocument();
    expect(container.querySelector('.star-icon-outline')).not.toBeInTheDocument();
  });

  it('given 1 rating, it should display  1 solid star and 4 outline stars', async () => {
    const { container } = render(
      <ComicSliderItem
        item={{
          image: '',
          title: 'title',
          author: 'author',
          price: {
            value: 112,
            currency: 'USD',
          },
          category: 'category',
          rating: 1,
        }}
      />,
    );

    const titleElement = screen.getByText('title');
    const authorElement = screen.getByText('author');
    const priceElement = screen.getByText('USD 112');
    const categoryElement = screen.getByText('category');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
    expect(container.querySelectorAll('.star-icon-solid')).toHaveLength(1);
    expect(container.querySelectorAll('.star-icon-outline')).toHaveLength(4);
  });
});
