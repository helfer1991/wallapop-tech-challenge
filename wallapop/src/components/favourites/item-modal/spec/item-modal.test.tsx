import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FavouritesContext, FavouritesContextType } from "../../../../context/FavouritesContext";
import { ItemModal } from "../item-modal";

const mockItem = {
  title: "Test Item",
  description: "Test Item Description",
  price: "99.99",
  email: "test@example.com",
  image: "https://example.com/image.png",
};

describe("ItemModal", () => {
  const mockContext: FavouritesContextType = {
    favourites: [mockItem],
    addToFavourites: jest.fn(),
    removeFromFavourites: jest.fn(),
    isItemFavourite: jest.fn(),
  };

  it("should render the correct title and image", () => {
    render(
      <FavouritesContext.Provider value={mockContext}>
        <ItemModal item={mockItem} />
      </FavouritesContext.Provider>
    );

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByAltText("favourite-item-image")).toHaveAttribute(
      "src",
      mockItem.image
    );
  });

  it("should call removeFromFavourites when remove button is clicked", () => {
    render(
      <FavouritesContext.Provider value={mockContext}>
        <ItemModal item={mockItem} />
      </FavouritesContext.Provider>
    );

    const removeButton = screen.getByText("Remove :(");
    fireEvent.click(removeButton);

    expect(mockContext.removeFromFavourites).toHaveBeenCalledWith(mockItem);
  });
});
