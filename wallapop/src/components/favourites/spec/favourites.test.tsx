import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Favourites } from '../favourites';
import { FavouritesContext } from '../../../context/FavouritesContext';

// Mocked favourites context value
const mockFavouritesContextValue = {
  favourites: [
    {
      title: 'Item 1',
      description: 'Description of Item 1',
      price: '$10.00',
      email: 'item1@example.com',
      image: 'item1.png',
    },
    {
      title: 'Item 2',
      description: 'Description of Item 2',
      price: '$20.00',
      email: 'item2@example.com',
      image: 'item2.png',
    },
    {
      title: 'Item 3',
      description: 'Description of Item 3',
      price: '$30.00',
      email: 'item3@example.com',
      image: 'item3.png',
    },
  ],
  addToFavourites: jest.fn(),
  removeFromFavourites: jest.fn(),
  isItemFavourite: jest.fn(),
};

describe('Favourites component', () => {
  it('renders without errors', () => {
    render(
      <Favourites show onClose={jest.fn()} />,
      { 
        wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValue}>{children}</FavouritesContext.Provider>
      }
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('displays all favourite items', () => {
    render(
      <Favourites show onClose={jest.fn()} />,
      { 
        wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValue}>{children}</FavouritesContext.Provider>
      }
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
  });
});
