import React, { useContext } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FavouritesContext, FavouritesContextProvider, FavouritesContextType } from '../FavouritesContext';

const TestComponent = () => {
  const { addToFavourites, favourites, removeFromFavourites, isItemFavourite } = useContext(FavouritesContext);

  const item = {
    title: 'Test item',
    description: 'This is a test item',
    price: '5',
    email: 'test@test.com',
    image: 'test.png',
  };

  const handleAddToFavourites = () => {
    addToFavourites(item);
  };

  const handleRemoveFromFavourites = () => {
    removeFromFavourites(item);
  };

  return (
    <div>
      <button onClick={handleAddToFavourites}>Add to favourites</button>
      <p role="list">Favourites: {favourites.map((favourite) => favourite.title).join(', ')}</p>
      <button onClick={handleRemoveFromFavourites}>Remove from favourites</button>
      <p>is {item.title} favourite?: {isItemFavourite(item).toString()}</p>
    </div>
  );
};

describe('FavouritesContextProvider', () => {
  it('should render the children components', () => {
    render(
      <FavouritesContextProvider>
        <div>Test Component</div>
      </FavouritesContextProvider>
    );

    const element = screen.getByText('Test Component');
    expect(element).toBeInTheDocument();
  });

  it('should add an item to favourites', () => {
    render(
      <FavouritesContextProvider>
        <TestComponent />
      </FavouritesContextProvider>
    );

    const addToFavouritesButton = screen.getByText('Add to favourites');
    fireEvent.click(addToFavouritesButton);

    const favouritesList = screen.getByRole('list');
    const favouriteItem = screen.getByText('Favourites: Test item');

    expect(favouritesList).toContainElement(favouriteItem);
  });

  it('should remove an item from favourites', () => {
    render(
      <FavouritesContextProvider>
        <TestComponent />
      </FavouritesContextProvider>
    );

    const addToFavouritesButton = screen.getByText('Add to favourites');
    fireEvent.click(addToFavouritesButton);

    const removeFromFavouritesButton = screen.getByText('Remove from favourites');
    fireEvent.click(removeFromFavouritesButton);

    const favouritesList = screen.getByRole('list');
    const favouriteItem = screen.queryByText('Test item');
  
    expect(favouritesList).not.toContainElement(favouriteItem);
  });

  it('should check true if item is in the favourites', () => {
    render(
      <FavouritesContextProvider>
        <TestComponent />
      </FavouritesContextProvider>
    );

    const addToFavouritesButton = screen.getByText('Add to favourites');
    fireEvent.click(addToFavouritesButton);

    const favouritesList = screen.getByRole('list');
    const favouriteItem = screen.getByText('Favourites: Test item');
  
    expect(favouritesList).toContainElement(favouriteItem);
  });

  it('should return false if item is not in favourites', () => {
    render(
      <FavouritesContextProvider>
        <TestComponent />
      </FavouritesContextProvider>
    );

    const addToFavouritesButton = screen.getByText('Add to favourites');
    fireEvent.click(addToFavouritesButton);

    const favouritesList = screen.getByRole('list');
    const favouriteItem = screen.queryByText('Favourites: Test item 2');
  
    expect(favouritesList).not.toContainElement(favouriteItem);
  });
});

