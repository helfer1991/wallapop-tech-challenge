import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ItemsList } from '../items-list';
import { FavouritesContextProvider } from '../../../context/FavouritesContext';

const items = [
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
    beforeEach(() => {
        render(
            <FavouritesContextProvider>
                <ItemsList items={items} />
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
})  ;
