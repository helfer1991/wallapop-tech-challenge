import React, { useState, useEffect } from 'react';

import type { Item } from '../items-list/items-list'

import { SearchBar } from '../search-bar';

import { Container, Wrapper } from './styles';

import { ItemModal } from './item-modal';

type FavouritesProps = {
    items: Array<Item>;
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
    removeFromFavourites: (item: Item) => void;
}

export const Favourites: React.FC<FavouritesProps> = ({ items, show, onClose, removeFromFavourites }) => {
    const [sortedItems, setSortedItems] = useState<Array<Item>>(items);
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        const filteredItems = items.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()));
        searchInput === '' ? setSortedItems([...items]) : setSortedItems(filteredItems);
    }, [searchInput, items]);
    
    return (
        show ?
        <Container onClick={onClose}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <SearchBar searchCategory="title" setSearchResult={setSearchInput} />
                {sortedItems && sortedItems.map((item, index) => <ItemModal key={`${item}-${index}`} item={item} removeFromFavourites={removeFromFavourites} />)}
            </Wrapper>
        </Container>
        : null
    );
}