import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Item } from '../item';

const item = {
  title: 'Test Item',
  description: 'This is a test item',
  image: 'test-image.jpg',
  price: '10.00',
  email: 'test@example.com',
};

describe('Item', () => {
  it('renders the item details correctly', () => {
    const { getByAltText, getByText } = render(<Item item={item} addToFavourites={() => {}} />);

    expect(getByAltText('item-image')).toBeInTheDocument();
    expect(getByText(item.title)).toBeInTheDocument();
    expect(getByText(item.description)).toBeInTheDocument();
    expect(getByText(`${parseInt(item.price).toLocaleString('de-DE')}€`)).toBeInTheDocument();
    expect(getByText(item.email)).toBeInTheDocument();
  });

  it('calls addToFavourites and updates isFavourite when the favourite button is clicked', () => {
    const addToFavourites = jest.fn();
    const { getByTestId } = render(<Item item={item} addToFavourites={addToFavourites} />);

    const favouriteButton = getByTestId('button');
    expect(favouriteButton).toBeInTheDocument();
    expect(favouriteButton).not.toBeDisabled();

    fireEvent.click(favouriteButton);

    expect(addToFavourites).toHaveBeenCalledTimes(1);
    expect(addToFavourites).toHaveBeenCalledWith(expect.any(Object)); // Make sure the event object is passed to the callback

    expect(favouriteButton).toBeDisabled();
    expect(getByTestId('button')).toBeInTheDocument();
  });

  it('disables the favourite button when isFavourite is true', () => {
    const { getByTestId, rerender } = render(<Item item={item} addToFavourites={() => {}} />);
    const favouriteButton = getByTestId('button');

    expect(favouriteButton).not.toBeDisabled();

    // Click the favourite button to set isFavourite to true
    fireEvent.click(favouriteButton);
    rerender(<Item item={item} addToFavourites={() => {}} />);

    expect(favouriteButton).toBeDisabled();
  });
});