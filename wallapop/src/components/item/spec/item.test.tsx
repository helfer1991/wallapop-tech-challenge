import { render, fireEvent } from '@testing-library/react';
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
  it('should render the item details', () => {
    const { getByText, getByAltText } = render(
      <FavouritesContextProvider>
        <Item item={testItem} />
      </FavouritesContextProvider>
    );

    expect(getByText(testItem.title)).toBeInTheDocument();
    expect(getByText(testItem.description)).toBeInTheDocument();
    expect(getByText('9€')).toBeInTheDocument();
    expect(getByText(testItem.email)).toBeInTheDocument();
    expect(getByAltText('item-image')).toBeInTheDocument();
  });

  it('should add item to favourites', () => {
    const { getByTestId } = render(
      <FavouritesContextProvider>
        <Item item={testItem} />
      </FavouritesContextProvider>
    );

    const button = getByTestId('add-to-favourites-button');

    fireEvent.click(button);
    expect(button).toHaveAttribute('disabled');
  });
});
