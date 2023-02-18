import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Favourites } from '../favourites';

const mockItems = [
    {
        title: "Item 1",
        description: "Item 1 description",
        price: "1.00",
        email: "item1@test.com",
        image: "item1.png",
      },
      {
        title: "Item 2",
        description: "Item 2 description",
        price: "2.00",
        email: "item2@test.com",
        image: "item2.png",
      },
];

describe('Favourites', () => {
  it('renders without crashing', () => {
    render(
      <Favourites
        items={mockItems}
        show
        onClose={() => {}}
        removeFromFavourites={() => {}}
      />
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('calls removeFromFavourites when an item is removed', () => {
    const mockRemoveFromFavourites = jest.fn();
    render(
      <Favourites
        items={mockItems}
        show
        onClose={() => {}}
        removeFromFavourites={mockRemoveFromFavourites}
      />
    );
    const removeButton = screen.getAllByText('Remove :(');
    fireEvent.click(removeButton[0]);
    expect(mockRemoveFromFavourites).toHaveBeenCalledTimes(1);
  });
});
