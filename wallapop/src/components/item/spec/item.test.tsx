import { render, fireEvent, screen } from '@testing-library/react';
import { FavouritesContextProvider } from '../../../context/FavouritesContext';
import { Item } from '../item';

const testItem = {
  title: 'Test Item',
  description: 'A test item',
  price: '9',
  email: 'test@example.com',
  image: 'https://example.com/test-image.jpg'
};

describe('Item', () => {
  describe('should render the Item component before adding to favourites', () => {
    beforeEach(() => {
      render(
        <FavouritesContextProvider>
          <Item item={testItem} />
        </FavouritesContextProvider>
      );
    });

    it('should render the item details', () => {
      expect(screen.getByText(testItem.title)).toBeInTheDocument();
      expect(screen.getByText(testItem.description)).toBeInTheDocument();
      expect(screen.getByText('9€')).toBeInTheDocument();
      expect(screen.getByText(testItem.email)).toBeInTheDocument();
      expect(screen.getByAltText('item-image')).toBeInTheDocument();
    });
  
    it('should not show icon Heart Full', () => {
      const iconHeartFull = screen.queryByTestId('icon-heart-full');
      expect(iconHeartFull).not.toBeInTheDocument();
    });
  
    it('should show icon Heart Empty', () => {
      const iconHeartEmpty = screen.getByTestId('icon-heart-empty');
      expect(iconHeartEmpty).toBeInTheDocument();
    });
  })

  describe('should add item to favourites', () => {
    beforeEach(() => {
      render(
        <FavouritesContextProvider>
          <Item item={testItem} />
        </FavouritesContextProvider>
      );

      const button = screen.getByTestId('add-to-favourites-button');
  
      fireEvent.click(button);
    });

    it('should add item to favourites', () => {
      expect(screen.getByTestId('add-to-favourites-button')).toHaveAttribute('disabled');
    });

    it('should show icon Heart Full', () => {
      const iconHeartFull = screen.getByTestId('icon-heart-full');
      expect(iconHeartFull).toBeInTheDocument();
    });

    it('should not show icon Heart Empty', () => {
      const iconHeartEmpty = screen.queryByTestId('icon-heart-empty');
      expect(iconHeartEmpty).not.toBeInTheDocument();
    });
  })
});
