import React, { useState, useEffect, useCallback } from "react";

import { SearchBar } from "../search-bar";
import { SortModal } from "../sort-modal";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { EmptyState } from "../empty-state";

import { Container, SortButton, SortButtonText, SearchButtonWrapper, SearchButton } from "./styles";

import { ItemList } from "./item-list";

export type Item = {
  [key: string] : string;
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

type ItemsListProps = {
  items: Array<Item>;
}

const sortCriteria = ['Title', 'Description', 'Price', 'Email'];

export const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [sortedItems, setSortedItems] = useState<Array<Item>>(items);
  const [searchTerm, setSearchTerm] = useState<string>('title');
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('title');

  useEffect(() => {
    let filteredItems = [];

    if(searchTerm === 'title') {
      filteredItems = items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
    } else if(searchTerm === 'description') {
      filteredItems = items.filter(item => item.description.toLowerCase().includes(searchInput.toLowerCase()));
    } else if(searchTerm === 'price') {
      filteredItems = items.filter(item => item.price.toLowerCase().includes(searchInput.toLowerCase()));
    }
    else {
      filteredItems = items.filter(item => item.email.toLowerCase().includes(searchInput.toLowerCase()));
    }
    searchInput === ''
      ? setSortedItems([...items].sort((a, b) => a[filterCategory].toLowerCase() > b[filterCategory].toLowerCase() ? 1 : -1)) 
      : setSortedItems(filteredItems);

  }, [searchInput, filterCategory]);

  useEffect(() => {
    if(filterCategory === 'title') {
      setSortedItems([...sortedItems].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
    } else if(filterCategory === 'description') {
      setSortedItems([...sortedItems].sort((a, b) => a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1));
    } else if(filterCategory === 'price') {
      setSortedItems([...sortedItems].sort((a, b) => parseInt(a.price) - parseInt(b.price) ));
    }
    else {
      setSortedItems([...sortedItems].sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1));
    }
    setFilterCategory(filterCategory);
  }, [filterCategory]);

  const setSearchInputCallback = useCallback(
    (searchInputValue: string) => {
      setSearchInput(searchInputValue);
    },
    [setSearchInput]
  );

  return (
    <Container>
      <SearchBar searchCategory={searchTerm} setSearchResult={setSearchInputCallback} />
      <SearchButtonWrapper>
        {sortCriteria.map(criteria => 
          <SearchButton key={`button-${criteria}`} onClick={() => setSearchTerm(criteria.toLowerCase())} isSelected={searchTerm === criteria.toLowerCase()}>
            {criteria}
          </SearchButton>)
        }
      </SearchButtonWrapper>
      <SortButton onClick={() => setShowSortModal(!showSortModal)}>
        Sort by:
        <SortButtonText>
          {filterCategory}
        </SortButtonText>
        {showSortModal ? <IoIosArrowUp data-testid="icon-arrow-up" /> : <IoIosArrowDown data-testid="icon-arrow-down" />}
      </SortButton>
      <SortModal setCategory={setFilterCategory} show={showSortModal} onClose={() => setShowSortModal(false)} />
      {sortedItems.length === 0 ? <EmptyState /> : <ItemList items={sortedItems} />}
    </Container>
  );
};