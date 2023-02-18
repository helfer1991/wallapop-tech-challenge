import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Header } from "../header";
import { FavouritesContext } from '../../../context/FavouritesContext';

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

describe("Header component", () => {
    beforeEach(() => {
        render(
            <Header />,
            {
                wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValue}>{children}</FavouritesContext.Provider>
              }
        );
    })

    it("renders logo", () => {
        expect(screen.getByAltText("wallapop-logo")).toBeInTheDocument();
    });

    it("clicking on favourites button toggles favourites list", () => {
        const favouritesButton = screen.getByText("Favourites");
    
        // Favourites list should not be visible initially
        expect(screen.queryByTestId("favourites-list")).not.toBeInTheDocument();
    
        fireEvent.click(favouritesButton);
    
        // Favourites list should be visible after clicking the button
        expect(screen.queryByTestId("favourites-list")).toBeInTheDocument();
    
        fireEvent.click(favouritesButton);
    
        // Favourites list should be hidden after clicking the button again
        expect(screen.queryByTestId("favourites-list")).not.toBeInTheDocument();
      });
});