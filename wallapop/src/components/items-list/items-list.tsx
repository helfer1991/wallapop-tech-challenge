import React, { useState, useEffect } from "react";
import { Item } from "../item";

import { SearchBar } from "../search-bar";
import { SortModal } from "../sort-modal";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';


import { Container, ItemsListContainer, SortButton, SortButtonText, SearchButtonWrapper, SearchButton, LoadMoreButton } from "./styles";

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

const sortCriteria = ['Title', 'Description', 'Price', 'Email'];

export const ItemsList: React.FC<ItemsListProps> = ({ items, addToFavourites }) => {
  const [isVisible, setIsVisible] = useState<number>(5);
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [sortedArray, setSortedArray] = useState<Array<Item>>(items);
  const [searchTerm, setSearchTerm] = useState<string>('title'); //pré-definir o search term como title?
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('title');

  // é neste componente que vou alojar o state da categoria a fazer search. mas passo essa categoria como props para 
  // search bar para mostrar no placeholder

  const showMoreItems = () => {
    setIsVisible((prevValue) => prevValue + 5);
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

  useEffect(() => {
    if(filterCategory === 'title') {
      setSortedArray([...sortedArray].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1));
    } else if(filterCategory === 'description') {
      setSortedArray([...sortedArray].sort((a, b) => a.description.toLowerCase() > b.description.toLowerCase() ? 1 : -1));
    } else if(filterCategory === 'price') {
      setSortedArray([...sortedArray].sort((a, b) => parseInt(a.price) - parseInt(b.price) ));
    }
    else {
      setSortedArray([...sortedArray].sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1));
    }
    setFilterCategory(filterCategory);
  }, [filterCategory]);

  return (
    <Container>
      <SearchBar searchCategory={searchTerm} setSearchResult={setSearchInput} />
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
        {showSortModal ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </SortButton>
      <SortModal setCategory={setFilterCategory} show={showSortModal} onClose={() => setShowSortModal(false)} />
      <ItemsListContainer>
        {sortedArray && sortedArray.slice(0, isVisible).map((item, index) => (
          <Item item={item} key={`${item.title}-${index}`} addToFavourites={() => addToFavourites(item)} />
        ))}
        {sortedArray.length - isVisible !== 0 && <LoadMoreButton onClick={showMoreItems}>Load more</LoadMoreButton>}
      </ItemsListContainer>
    </Container>
  );
};