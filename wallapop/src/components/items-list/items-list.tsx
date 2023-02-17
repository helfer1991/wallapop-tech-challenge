import React, { useState, useEffect } from "react";
import { Item } from "../item";

import { SearchBar } from "../search-bar";
import { SortModal } from "../sort-modal";

import { Container, SortButton, SortButtonText, FilterButtonWrapper, FilterButton, LoadMoreButton } from "./styles";

export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

type ItemsListProps = {
  items: Array<Item>;
  addToFavourites: (item: Item) => void;
}

const sortCriteria = ['title', 'description', 'price', 'email'];

export const ItemsList: React.FC<ItemsListProps> = ({ items, addToFavourites }) => {
  const [isVisible, setIsVisible] = useState<number>(5);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>('');
  const [sortedArray, setSortedArray] = useState<Array<Item>>(items);
  const [searchTerm, setSearchTerm] = useState<string>('title');
  const [searchInput, setSearchInput] = useState<string>('');
  const sortArray = [...items].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);

  const showMoreItems = () => {
    setIsVisible((prevValue) => prevValue + 5);
  }

  const sort = (criteria: string) => {
    if(criteria === 'title') {
      setSortedArray([...items].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
    } else if(criteria === 'description') {
      setSortedArray([...items].sort((a, b) => a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1));
    } else if(criteria === 'price') {
      setSortedArray([...items].sort((a, b) => parseInt(a.price) - parseInt(b.price) ));
    }
    else {
      setSortedArray([...items].sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1));
    }
  }

  console.log(searchInput);

  return (
    <Container>
      <p>Search by:</p>
      <SearchBar searchCategory={searchTerm} setSearchResult={setSearchInput} />
      <FilterButtonWrapper>
        {sortCriteria.map(criteria => <FilterButton key={`button-${criteria}`}onClick={() => sort(criteria)}>{criteria}</FilterButton>)}
      </FilterButtonWrapper>
      {sortedArray && sortedArray.slice(0, isVisible).map((item, index) => (
        <Item item={item} key={`${item.title}-${index}`} addToFavourites={() => addToFavourites(item)} />
      ))}
      {sortedArray.length - isVisible !== 0 && <LoadMoreButton onClick={showMoreItems}>Load more</LoadMoreButton>}
    </Container>
  );
};