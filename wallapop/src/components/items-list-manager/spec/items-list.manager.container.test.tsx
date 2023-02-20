import React from 'react';
import { render, waitFor, screen, act } from '@testing-library/react';
import axios from 'axios';
import { ItemsListManagerContainer } from '../items-list-manager.container';
import { FavouritesContextProvider } from '../../../context/FavouritesContext';


jest.mock('axios');

const mockData = {
  items: [
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
  ],
};

describe('ItemsListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({ data: mockData });
    
    render(
        <FavouritesContextProvider>
            <ItemsListManagerContainer />
        </FavouritesContextProvider>
    );
  });

  describe('renders component while loading', () => {
    it('renders loading message', async () => {
        expect(screen.getByTestId('skeleton-items-list')).toBeInTheDocument();

        await waitFor(() => {});
    });

    it('does not render data', () => {
        expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Item 2')).not.toBeInTheDocument();
    });
  })

  describe('renders the component with data fetched', () => {
    it('does not render loading message', async () => {
        await waitFor(() => expect(screen.getByText('Item 1')).toBeInTheDocument());
        
        expect(screen.queryByTestId('skeleton-items-list')).not.toBeInTheDocument();
    });

    it('renders items list', async () => {
        expect(screen.getByTestId('skeleton-items-list')).toBeInTheDocument();
        
        // wait for the component to finish loading
        await waitFor(() => expect(screen.getByText('Item 1')).toBeInTheDocument());
        
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
      });
  })
});
