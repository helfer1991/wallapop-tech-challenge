import React, { useState, useEffect } from "react";
import { Item } from "../item";

import { SearchBar } from "../search-bar";
import { SortModal } from "../sort-modal";

import { Container, SearchTitleButton, SearchtButtonText, FilterButtonWrapper, FilterButton, LoadMoreButton } from "./styles";

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
  const [searchTerm, setSearchTerm] = useState<string>('title'); //pré-definir o search term como title?
  const [searchInput, setSearchInput] = useState<string>('');

  // é neste componente que vou alojar o state da categoria a fazer search. mas passo essa categoria como props para 
  // search bar para mostrar no placeholder

  const showMoreItems = () => {
    setIsVisible((prevValue) => prevValue + 5);
  }

  const sort = (criteria: string) => { /* refactor this into an useReducer if possible */
    if(criteria === 'title') {
      setSortedArray([...sortedArray].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
    } else if(criteria === 'description') {
      setSortedArray([...sortedArray].sort((a, b) => a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1));
    } else if(criteria === 'price') {
      setSortedArray([...sortedArray].sort((a, b) => parseInt(a.price) - parseInt(b.price) ));
    }
    else {
      setSortedArray([...sortedArray].sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1));
    }
  }

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
    searchInput === '' ? setSortedArray([...items]) : setSortedArray(filteredItems);
    setIsVisible(5);
}, [searchInput, items]);

  return (
    <Container>
      <SearchTitleButton onClick={() => setShowSortModal(!showSortModal)}>Search by:<SearchtButtonText>{searchTerm}</SearchtButtonText></SearchTitleButton>
      <SortModal setCategory={setSearchTerm} show={showSortModal} onClose={() => setShowSortModal(false)} />
      <SearchBar searchCategory={searchTerm} setSearchResult={setSearchInput} />
      <FilterButtonWrapper>
        {sortCriteria.map(criteria => <FilterButton key={`button-${criteria}`} onClick={() => sort(criteria)}>{criteria}</FilterButton>)}
      </FilterButtonWrapper>
      {sortedArray && sortedArray.slice(0, isVisible).map((item, index) => (
        <Item item={item} key={`${item.title}-${index}`} addToFavourites={() => addToFavourites(item)} />
      ))}
      {sortedArray.length - isVisible !== 0 && <LoadMoreButton onClick={showMoreItems}>Load more</LoadMoreButton>}
    </Container>
  );
};