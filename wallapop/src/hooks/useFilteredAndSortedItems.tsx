import { useEffect, useState, useCallback } from "react";
import type { Item } from "../components/items-list-manager/items-list-manager";
import { Categories } from "../constants";

export const useFilteredAndSortedItems = (items: Array<Item>, searchCategory: string, searchInput: string, filterCategory: string): Array<Item> => {
  const [sortedItems, setSortedItems] = useState<Array<Item>>([]);

  const filteredAndSortedItems = useCallback((items: Item[], searchCategory: string, searchInput: string, filterCategory: string): Array<Item> => {
    let filteredItems: Array<Item> = [];

    if (searchCategory === Categories.TITLE) {
      filteredItems = items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
    } else if (searchCategory === Categories.DESCRIPTION) {
      filteredItems = items.filter(item => item.description.toLowerCase().includes(searchInput.toLowerCase()));
    } else if (searchCategory === Categories.PRICE) {
      filteredItems = items.filter(item => item.price.includes(searchInput));
    } else {
      filteredItems = items.filter(item => item.email.toLowerCase().includes(searchInput.toLowerCase()));
    }

    const sortedItems = [...filteredItems].sort((a, b) => {
      if (filterCategory === Categories.TITLE) {
        return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
      } else if (filterCategory === Categories.DESCRIPTION) {
        return a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1;
      } else if (filterCategory === Categories.PRICE) {
        return parseInt(a.price) - parseInt(b.price);
      } else {
        return a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1;
      }
    });

    return sortedItems;
  }, []);

  useEffect(() => {
    const sortedItems = filteredAndSortedItems(items, searchCategory, searchInput, filterCategory);
    setSortedItems(sortedItems);
  }, [items, searchCategory, searchInput, filterCategory, filteredAndSortedItems]);

  return sortedItems;
};
