import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import CartItem from '.';

describe('CartItem test', () => {
  test('should render properly', async () => {
    render(
      <CartItem
        item={{
          id: 'se',
          image: '',
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
          image: '',
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
      />,
    );

    const deleteElement = container.querySelector('.button-delete-item');

    if (deleteElement === null) {
      throw new Error('No delete Element');
    }
    await userEvent.click(deleteElement);
    expect(handleOnDelete).toHaveBeenCalledTimes(1);
  });
});
