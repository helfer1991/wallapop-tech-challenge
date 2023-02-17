import React, { useState, useEffect } from 'react';

import type { Item } from '../items-list/items-list'

import { SearchBar } from '../search-bar';

import { Container, Wrapper } from './styles';

import { ItemModal } from './item-modal';

type FavouritesProps = {
    items: Array<Item>;
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Favourites: React.FC<FavouritesProps> = ({ items, show, onClose }) => {
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
                {sortedItems && sortedItems.map((item, index) => <ItemModal key={`${item}-${index}`} title={item.title} image={item.image} />)}
            </Wrapper>
        </Container>
        : null
    );
}