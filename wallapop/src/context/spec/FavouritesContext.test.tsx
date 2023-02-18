import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FavouritesContext, FavouritesContextProvider } from '../FavouritesContext';

const TestComponent = () => {
  const { addToFavourites, favourites } = React.useContext(FavouritesContext);

  const item = {
    title: 'Test item',
    description: 'This is a test item',
    price: '$5',
    email: 'test@test.com',
    image: 'test.png',
  };

  const handleAddToFavourites = () => {
    addToFavourites(item);
  };

  return (
    <div>
      <button onClick={handleAddToFavourites}>Add to favourites</button>
      <ul>
        {favourites.map((favourite, index) => (
          <li key={index}>{favourite.title}</li>
        ))}
      </ul>
    </div>
  );
};

describe('FavouritesContextProvider', () => {
  it('should render the children components', () => {
    render(
      <FavouritesContextProvider>
        <div>Test</div>
      </FavouritesContextProvider>
    );

    const element = screen.getByText('Test');
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
    const favouriteItem = screen.getByText('Test item');

    expect(favouritesList).toContainElement(favouriteItem);
  });

  /*it('should remove an item from favourites', () => {
    render(
      <FavouritesContextProvider>
        <TestComponent />
      </FavouritesContextProvider>
    );

    const addToFavouritesButton = screen.getByText('Add to favourites');
    fireEvent.click(addToFavouritesButton);

    const favouritesList = screen.getByRole('list');
    const favouriteItem = screen.getByText('Test item');
    expect(favouritesList).toContainElement(favouriteItem);

    fireEvent.click(favouriteItem);
    expect(favouritesList).not.toContainElement(favouriteItem);
  });

  it('should return true if an item is a favourite', () => {
    render(
      <FavouritesContextProvider>
        <TestComponent />
      </FavouritesContextProvider>
    );

    const { isItemFavourite } = React.useContext(FavouritesContext);
    const item = {
      title: 'Test item',
      description: 'This is a test item',
      price: '$5',
      email: 'test@test.com',
      image: 'test.png',
    };

    expect(isFavourite(item)).toBe(false);

    const addToFavouritesButton = screen.getByText('Add to favourites');
    fireEvent.click(addToFavouritesButton);

    expect(isItemFavourite(item)).toBe(true);
  });*/
});
