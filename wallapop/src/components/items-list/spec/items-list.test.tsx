import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { ItemsList } from '../items-list';
import { FavouritesContextProvider } from '../../../context/FavouritesContext';

const mockItems = [
  {
    title: 'Item 1',
    description: 'Description 1',
    price: '100',
    email: 'email1@test.com',
    image: 'image1.jpg',
  },
  {
    title: 'Item 2',
    description: 'Description 2',
    price: '200',
    email: 'email2@test.com',
    image: 'image2.jpg',
  },
  {
    title: 'Item 3',
    description: 'Description 3',
    price: '50',
    email: 'email3@test.com',
    image: 'image3.jpg',
  },
];

describe('ItemsList', () => {
    describe('renders ItemsList with at least 1 item', () => {
      beforeEach(() => {
        render(
            <FavouritesContextProvider>
                <ItemsList items={mockItems} />
            </FavouritesContextProvider>
        );
      })

      it('renders search bar with default title search category', () => {
          const searchBar = screen.getByPlaceholderText("Search by title");
          expect((searchBar as HTMLInputElement).placeholder).toBe("Search by title");
      });

      it('renders items in default order', () => {
          const itemTitles = screen.getAllByTestId(/^Item/).map((title) => title.textContent);
          expect(itemTitles).toEqual(["Item 1Description 1100€email1@test.com", "Item 2Description 2200€email2@test.com", "Item 3Description 350€email3@test.com"]);
      });

      it('filters items by search term 2', () => {
          const searchInput = screen.getByRole('searchbox');
          fireEvent.change(searchInput, { target: { value: '2' } });
          const itemTitles = screen.getAllByTestId('Item 2').map((title) => title.textContent);
          expect(itemTitles).toEqual(['Item 2Description 2200€email2@test.com']);
      });

      it('does not render any favourites due to unmatched filter input', async () => {
        const searchInput = screen.getByRole('searchbox');
        fireEvent.change(searchInput, { target: { value: 'Missing Item' } });
        await waitFor(() => {
          expect(screen.queryAllByTestId(/^Item/)).toHaveLength(0);
        })
      });

      it('renders Empty State component due to unmatched filter input', async () => {
        const searchInput = screen.getByRole('searchbox');
        fireEvent.change(searchInput, { target: { value: 'Missing Item' } });
        await waitFor(() => {
          expect(screen.getByTestId('empty-state')).toBeInTheDocument();
        })
      });

      it('renders an icon arrow pointing down', () => {
        expect(screen.getByTestId('icon-arrow-down')).toBeInTheDocument();
      });

      it('does not render an icon arrow pointing up', () => {
        expect(screen.queryByTestId('icon-arrow-up')).not.toBeInTheDocument();
      });

      it('renders an icon arrow pointing up when clicking on the sort button', () => {
        const sortButton = screen.getByText('Sort by:');
        fireEvent.click(sortButton);
        expect(screen.getByTestId('icon-arrow-up')).toBeInTheDocument();
      });

      it('does not render an icon arrow pointing down when clicking on the sort button', () => {
        const sortButton = screen.getByText('Sort by:');
        fireEvent.click(sortButton);
        expect(screen.queryByTestId('icon-arrow-down')).not.toBeInTheDocument();
      })

      it('sorts items by description', () => {
          const sortButton = screen.getByText('Sort by:');
          fireEvent.click(sortButton);
          const titleOption = screen.getByTestId('sort-by-description-button');
          fireEvent.click(titleOption);
          const itemsDescription = screen.getAllByTestId(/^Item/).map((description) => description.textContent);
          expect(itemsDescription).toEqual(["Item 1Description 1100€email1@test.com", "Item 2Description 2200€email2@test.com", "Item 3Description 350€email3@test.com"]);
      });

      it('sorts items by price', () => {
          const sortButton = screen.getByText('Sort by:');
          fireEvent.click(sortButton);
          const priceOption = screen.getByTestId('sort-by-price-button');
          fireEvent.click(priceOption);
          const itemsPrices = screen.getAllByTestId(/^Item/).map((title) => title.textContent);
          expect(itemsPrices).toEqual(['Item 3Description 350€email3@test.com', 'Item 1Description 1100€email1@test.com', 'Item 2Description 2200€email2@test.com']);
      });

      it('does not render the EmptyState component', () => {
        expect(screen.queryByTestId('empty-state')).not.toBeInTheDocument();
      })
    })

    describe('renders the EmptyState component due to an empty list', () => {
      it('filters items by unmatched term and renders EmptyState component', () => {
        render(
          <FavouritesContextProvider>
              <ItemsList items={[]} />
          </FavouritesContextProvider>
        );

        const searchInput = screen.getByRole('searchbox');
        fireEvent.change(searchInput, { target: { value: '434893489' } });
        expect(screen.getByTestId('empty-state')).toBeInTheDocument();
      });
    })
});
