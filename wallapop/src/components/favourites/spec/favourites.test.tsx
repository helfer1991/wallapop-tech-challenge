import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Favourites } from '../favourites';
import { FavouritesContext } from '../../../context/FavouritesContext';

const mockFavouritesContextValue = {
  favourites: [
    {
      title: 'Item 1',
      description: 'Description of Item 1',
      price: '10',
      email: 'item1@example.com',
      image: 'item1.png',
    },
    {
      title: 'Item 2',
      description: 'Description of Item 2',
      price: '20',
      email: 'item2@example.com',
      image: 'item2.png',
    },
    {
      title: 'Item 3',
      description: 'Description of Item 3',
      price: '30',
      email: 'item3@example.com',
      image: 'item3.png',
    },
  ],
  addToFavourites: jest.fn(),
  removeFromFavourites: jest.fn(),
  isItemFavourite: jest.fn(),
};

const mockFavouritesContextValueEmpty = {
  favourites: [
  ],
  addToFavourites: jest.fn(),
  removeFromFavourites: jest.fn(),
  isItemFavourite: jest.fn(),
};

describe('Favourites component', () => {
  describe('Favourites component with at least 1 favourite', () => {
    beforeEach(() => {
      render(
        <Favourites show onClose={jest.fn()} />,
        { 
          wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValue}>{children}</FavouritesContext.Provider>
        }
      );
    })
  
    it('renders without errors', () => {
      expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });
  
    it('displays all favourite items', () => {
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });
  
    it('filters items by search term 2', () => {
      const searchInput = screen.getByRole('searchbox');
      fireEvent.change(searchInput, { target: { value: '2' } });
      const itemTitles = screen.getAllByTestId('Item 2').map((title) => title.textContent);
      expect(itemTitles).toEqual(['Item 2Remove :(']);
    });
  
    it('does not render Empty State component', () => {
      expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument();
    });
  
    it('renders Empty State component due to unmatched filter input', async () => {
      const searchInput = screen.getByRole('searchbox');
      fireEvent.change(searchInput, { target: { value: 'Missing Item' } });
      await waitFor(() => {
        expect(screen.getByTestId('empty-state')).toBeInTheDocument();
      })
    });
  
    it('does not render any favourites due to unmatched filter input', async () => {
      const searchInput = screen.getByRole('searchbox');
      fireEvent.change(searchInput, { target: { value: 'Missing Item' } });
      await waitFor(() => {
        expect(screen.queryAllByTestId(/^Item/)).toHaveLength(0);
      })
    });
  });

  describe('Favourites component without items', () => {
    beforeEach(() => {
      render(
        <Favourites show onClose={jest.fn()} />,
        { 
          wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValueEmpty}>{children}</FavouritesContext.Provider>
        }
      );
    });

    it('renders without errors', () => {
      expect(screen.getByRole('searchbox')).toBeInTheDocument();
    });
  
    it('renders 0 favourite items', () => {
      expect(screen.queryAllByText(/^Item/)).toHaveLength(0);
    });
  
    it('filters items by search term 2, but yields no results due to the absence of favourites', () => {
      const searchInput = screen.getByRole('searchbox');
      fireEvent.change(searchInput, { target: { value: '2' } });
      expect(screen.queryAllByText(/^Item/)).toHaveLength(0);
    });
  
    it('renders Empty State component', () => {
      expect(screen.getByTestId('empty-state')).toBeInTheDocument();
    });
  
    it('renders Empty State component due to unmatched filter input', async () => {
      const searchInput = screen.getByRole('searchbox');
      fireEvent.change(searchInput, { target: { value: 'Missing Item' } });
      await waitFor(() => {
        expect(screen.getByTestId('empty-state')).toBeInTheDocument();
      })
    });
  
    it('does not render any favourites due to unmatched filter input', async () => {
      const searchInput = screen.getByRole('searchbox');
      fireEvent.change(searchInput, { target: { value: 'Missing Item' } });
      await waitFor(() => {
        expect(screen.queryAllByTestId(/^Item/)).toHaveLength(0);
      })
    });
  })

});
