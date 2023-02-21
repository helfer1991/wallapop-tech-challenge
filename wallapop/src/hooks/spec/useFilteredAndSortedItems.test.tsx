import { renderHook, act } from '@testing-library/react';
import { useFilteredAndSortedItems } from '../useFilteredAndSortedItems';
import { Categories } from '../../constants';

const items = [
  { title: 'Item 1', description: 'This is item 1', price: '10', email: 'item1@example.com', image: 'item1.png' },
  { title: 'Item 2', description: 'This is item 2', price: '20', email: 'item2@example.com', image: 'item2.png' },
  { title: 'Item 3', description: 'This is item 3', price: '30', email: 'item3@example.com', image: 'item3.png' },
];

describe('useFilteredAndSortedItems', () => {
  it('should return all items when no search input is provided', () => {
    const { result } = renderHook(() => useFilteredAndSortedItems(items, Categories.TITLE, '', ''));

    expect(result.current).toEqual(items);
  });

  it('should return items that match the search input', () => {
    const { result, rerender } = renderHook(
      ({ items, searchCategory, searchInput, filterCategory }) =>
        useFilteredAndSortedItems(items, searchCategory, searchInput, filterCategory),
      {
        initialProps: {
          items,
          searchCategory: Categories.TITLE,
          searchInput: 'item 2',
          filterCategory: '',
        },
      }
    );

    expect(result.current).toEqual([items[1]]);

    rerender({
      items,
      searchCategory: Categories.DESCRIPTION,
      searchInput: 'item',
      filterCategory: '',
    });

    expect(result.current).toEqual(items);
  });

  it('should return items sorted by the filter category', () => {
    const { result, rerender } = renderHook(
      ({ items, searchCategory, searchInput, filterCategory }) =>
        useFilteredAndSortedItems(items, searchCategory, searchInput, filterCategory),
      {
        initialProps: {
          items,
          searchCategory: Categories.PRICE,
          searchInput: '',
          filterCategory: Categories.TITLE,
        },
      }
    );

    expect(result.current).toEqual([items[0], items[1], items[2]]);

    rerender({
      items,
      searchCategory: Categories.PRICE,
      searchInput: '',
      filterCategory: Categories.DESCRIPTION,
    });

    expect(result.current).toEqual(items);
  });
});
