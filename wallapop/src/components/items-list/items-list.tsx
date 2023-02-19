import React, { useState, useMemo } from "react";

import { SearchBar } from "../search-bar";
import { SortModal } from "../sort-modal";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { EmptyState } from "../empty-state";
import { useFilteredAndSortedItems } from "../../hooks/useFilteredAndSortedItems";
import { CATEGORIES, Categories } from "../../constants";

import { Container, SortButton, SortButtonText, SearchButtonWrapper, SearchButton } from "./styles";

import { ItemList } from "./item-list";

export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

type ItemsListProps = {
  items: Array<Item>;
}

export const ItemsList: React.FC<ItemsListProps> = ({ items }) => {
  const [showSortModal, setShowSortModal] = useState<boolean>(false);
  const [searchCategory, setSearchCategory] = useState<string>(Categories.TITLE);
  const [searchInput, setSearchInput] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>(Categories.TITLE);

  const memoizedSearchButtons = useMemo(() => {
    return CATEGORIES.map(criteria => 
      <SearchButton key={`button-${criteria}`} onClick={() => setSearchCategory(criteria.toLowerCase())} isSelected={searchCategory === criteria.toLowerCase()}>
        {criteria}
      </SearchButton>
    );
  }, [searchCategory]);

  const sortedItems = useFilteredAndSortedItems(items, searchCategory, searchInput, filterCategory);

  return (
    <Container>
      <SearchBar searchCategory={searchCategory} setSearchResult={setSearchInput} />
      <SearchButtonWrapper>
        {memoizedSearchButtons}
      </SearchButtonWrapper>
      <SortButton onClick={() => setShowSortModal(!showSortModal)}>
        Sort by:
        <SortButtonText>
          {filterCategory}
        </SortButtonText>
        {showSortModal ? <IoIosArrowUp data-testid="icon-arrow-up" /> : <IoIosArrowDown data-testid="icon-arrow-down" />}
      </SortButton>
      <SortModal setCategory={setFilterCategory} show={showSortModal} onClose={() => setShowSortModal(false)} />
      {sortedItems.length === 0 ? <EmptyState description="Your search had no results. Try again please!" /> : <ItemList items={sortedItems} />}
    </Container>
  );
};