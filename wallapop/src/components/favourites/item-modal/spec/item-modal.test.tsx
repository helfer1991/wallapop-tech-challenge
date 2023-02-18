import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ItemModal } from '../item-modal';

const mockItem = {
    title: 'Test Item',
    description: 'This is a test item',
    image: 'test-image.jpg',
    price: '10.00',
    email: 'test@example.com',
  };

describe('ItemModal', () => {
  const removeFromFavourites = jest.fn();

  it('renders the title and image', () => {
    const { getByText, getByAltText } = render(
      <ItemModal item={mockItem} removeFromFavourites={removeFromFavourites} />
    );
    expect(getByText(mockItem.title)).toBeInTheDocument();
    expect(getByAltText('favourite-item-image')).toHaveAttribute('src', mockItem.image);
  });

  it('calls the removeFromFavourites function when the "Remove :(" button is clicked', () => {
    const { getByText } = render(
      <ItemModal item={mockItem} removeFromFavourites={removeFromFavourites} />
    );
    const removeButton = getByText('Remove :(');
    fireEvent.click(removeButton);
    expect(removeFromFavourites).toHaveBeenCalledTimes(1);
    expect(removeFromFavourites).toHaveBeenCalledWith(mockItem);
  });
});
