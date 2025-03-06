import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ComicSliderItem from '.';
import AppProvidersTest from '../../utils/test/app-providers-test';

describe('ComicSliderItem', () => {
  it('given 0 rating, it should not display stars', async () => {
    const { container } = render(
      <AppProvidersTest>
        <ComicSliderItem
          item={{
            id: 'zdsd',
            image: '/comic-manga-21.png',
            title: 'title',
            author: 'author',
            price: {
              value: 112,
              currency: 'USD',
            },
            category: 'category',
            rating: 0,
            stock: 12,
          }}
        />
      </AppProvidersTest>,
    );

    const titleElement = screen.getByText('title');
    const authorElement = screen.getByText('author');
    const priceCurrencyElement = screen.getByText('(USD)');
    const priceElement = screen.getByText('112');
    const categoryElements = screen.getAllByText('category');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(priceCurrencyElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(categoryElements).toHaveLength(2);
    expect(container.querySelector('.star-icon-solid')).not.toBeInTheDocument();
    expect(container.querySelector('.star-icon-outline')).not.toBeInTheDocument();
  });

  it('given 1 rating, it should display  1 solid star and 4 outline stars', async () => {
    const { container } = render(
      <AppProvidersTest>
        <ComicSliderItem
          item={{
            id: 'zdsd',
            image: '/comic-manga-21.png',
            title: 'title',
            author: 'author',
            price: {
              value: 112,
              currency: 'USD',
            },
            category: 'category',
            rating: 1,
            stock: 12,
          }}
        />
      </AppProvidersTest>,
    );

    const titleElement = screen.getByText('title');
    const authorElement = screen.getByText('author');
    const priceCurrencyElement = screen.getByText('(USD)');
    const priceElement = screen.getByText('112');
    const categoryElements = screen.getAllByText('category');

    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(priceCurrencyElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
    expect(categoryElements).toHaveLength(2);
    expect(container.querySelectorAll('.rating-container-desktop .star-icon-solid')).toHaveLength(
      1,
    );
    expect(container.querySelectorAll('.rating-container-desktop .star-icon-outline')).toHaveLength(
      4,
    );

    expect(container.querySelectorAll('.rating-container-mobile .star-icon-solid')).toHaveLength(1);
    expect(container.querySelectorAll('.rating-container-mobile .star-icon-outline')).toHaveLength(
      4,
    );
  });
});
