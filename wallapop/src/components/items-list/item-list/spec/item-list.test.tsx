import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ItemList } from "../item-list";
import { FavouritesContext } from '../../../../context/FavouritesContext';


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

const mockItemsMoreThan5 = [
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
      {
        title: "Item 3",
        description: "Item 3 description",
        price: "1.00",
        email: "item3@test.com",
        image: "item3.png",
      },
      {
        title: "Item 4",
        description: "Item 4 description",
        price: "2.00",
        email: "item4@test.com",
        image: "item4.png",
      },
      {
        title: "Item 5",
        description: "Item 5 description",
        price: "1.00",
        email: "item5@test.com",
        image: "item5.png",
      },
      {
        title: "Item 6",
        description: "Item 6 description",
        price: "2.00",
        email: "item6@test.com",
        image: "item6.png",
      },
]

const mockFavouritesContextValue = {
  favourites: [
    {
      title: 'Item 1',
      description: 'Description of Item 1',
      price: '10.00',
      email: 'item1@example.com',
      image: 'item1.png',
    },
    {
      title: 'Item 2',
      description: 'Description of Item 2',
      price: '20.00',
      email: 'item2@example.com',
      image: 'item2.png',
    },
    {
      title: 'Item 3',
      description: 'Description of Item 3',
      price: '30.00',
      email: 'item3@example.com',
      image: 'item3.png',
    },
  ],
  addToFavourites: jest.fn(),
  removeFromFavourites: jest.fn(),
  isItemFavourite: jest.fn(),
};

describe("ItemList component", () => {
  describe('ItemList component with less than 5 items', () => {
    beforeEach(() => {
        render(
          <ItemList items={mockItems} />,
          {
            wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValue}>{children}</FavouritesContext.Provider>
          }
        );
    })

    it("renders a list of only the first five (or less) items", () => {
        const item1Title = screen.getByText("Item 1");
        const item2Title = screen.getByText("Item 2");

        expect(item1Title).toBeInTheDocument();
        expect(item2Title).toBeInTheDocument();
    });

    it("does not render the 'Load more' button", () => {
        const loadMoreButton = screen.queryByTestId("load-more-button");

        expect(loadMoreButton).not.toBeInTheDocument();
    });
  })

  describe('ItemList component with more than 5 items', () => {
    beforeEach(() => {
        render(
          <ItemList items={mockItemsMoreThan5} />,
          {
            wrapper: ({ children }) => <FavouritesContext.Provider value={mockFavouritesContextValue}>{children}</FavouritesContext.Provider>
          }
          );
    })

    it("renders a list of items with a 'Load more' button", () => {
        const item1Title = screen.getByText("Item 1");
        const item2Title = screen.getByText("Item 2");
        const item3Title = screen.getByText("Item 3");
        const item4Title = screen.getByText("Item 4");
        const item5Title = screen.getByText("Item 5");
    
        expect(item1Title).toBeInTheDocument();
        expect(item2Title).toBeInTheDocument();
        expect(item3Title).toBeInTheDocument();
        expect(item4Title).toBeInTheDocument();
        expect(item5Title).toBeInTheDocument();
    });

    it("does render the 'Load more' button", () => {
        const loadMoreButton = screen.getByTestId("load-more-button");
        
        expect(loadMoreButton).toBeInTheDocument();
    });

    it("loads more items when 'Load more' button is clicked", () => {
      const loadMoreButton = screen.getByTestId("load-more-button");

      fireEvent.click(loadMoreButton);

      const item6Title = screen.getByText("Item 6");

      expect(item6Title).toBeInTheDocument();
    });
  });
});
