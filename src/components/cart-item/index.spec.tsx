import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import CartItem from '.';

describe('CartItem test', () => {
  test('should render properly', async () => {
    render(
      <CartItem
        item={{
          id: 'se',
          image: '/comic-manga-21.png',
          title: 'title',
          category: 'cat',
          price: {
            value: 22,
            currency: 'USD',
          },
          author: 'auh',
          rating: 2,
          stock: 12,
          quantity: 3,
        }}
        onDelete={() => {}}
        onAdd={() => {}}
        onSubtract={() => {}}
      />,
    );

    const label = await screen.findAllByText(/price:/);
    const title = await screen.findAllByText('title');

    expect(label.length).toBe(1);
    expect(title.length).toBe(1);
  });

  test('when press delete action, must trigger on delete', async () => {
    const handleOnDelete = jest.fn(() => {});

    const { container } = render(
      <CartItem
        item={{
          id: 'se',
          image: '/comic-manga-21.png',
          title: 'title',
          category: 'cat',
          price: {
            value: 22,
            currency: 'USD',
          },
          author: 'auh',
          rating: 2,
          stock: 12,
          quantity: 3,
        }}
        onDelete={handleOnDelete}
        onAdd={() => {}}
        onSubtract={() => {}}
      />,
    );

    const deleteElement = container.querySelector('.button-delete-item');

    if (deleteElement === null) {
      throw new Error('No delete Element');
    }
    await userEvent.click(deleteElement);
    expect(handleOnDelete).toHaveBeenCalledTimes(1);
  });

  test('when press add action, must trigger on add', async () => {
    const handleOnDelete = jest.fn(() => {});
    const handleOnAdd = jest.fn(() => {});

    const { container } = render(
      <CartItem
        item={{
          id: 'se',
          image: '/comic-cyberpunk-1.png',
          title: 'title',
          category: 'cat',
          price: {
            value: 22,
            currency: 'USD',
          },
          author: 'auh',
          rating: 2,
          stock: 12,
          quantity: 3,
        }}
        onDelete={handleOnDelete}
        onAdd={handleOnAdd}
        onSubtract={() => {}}
      />,
    );

    const addElement = container.querySelector('.cart-add-item');

    if (addElement === null) {
      throw new Error('No Add Element');
    }
    await userEvent.click(addElement);
    expect(handleOnAdd).toHaveBeenCalledTimes(1);
  });

  test('when press subtract action, must trigger on subtract', async () => {
    const handleOnDelete = jest.fn(() => {});
    const handleOnAdd = jest.fn(() => {});
    const handleOnSubtract = jest.fn(() => {});

    const { container } = render(
      <CartItem
        item={{
          id: 'se',
          image: '/comic-manga-21.png',
          title: 'title',
          category: 'cat',
          price: {
            value: 22,
            currency: 'USD',
          },
          author: 'auh',
          rating: 2,
          stock: 12,
          quantity: 3,
        }}
        onDelete={handleOnDelete}
        onAdd={handleOnAdd}
        onSubtract={handleOnSubtract}
      />,
    );

    const deleteElement = container.querySelector('.cart-subtract-item');

    if (deleteElement === null) {
      throw new Error('No Subtract Element');
    }
    await userEvent.click(deleteElement);
    expect(handleOnSubtract).toHaveBeenCalledTimes(1);
  });
});
