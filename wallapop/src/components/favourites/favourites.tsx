import React, { useState, useEffect } from 'react';

import { SearchBar } from '../search-bar';
import { Container, Wrapper } from './styles';
import { ItemModal } from './item-modal';
import { useFavourites } from '../../hooks/useFavourites';

import type { Item } from '../items-list/items-list'

type FavouritesProps = {
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Favourites: React.FC<FavouritesProps> = ({ show, onClose }) => {
    const { favourites } = useFavourites();
    const [sortedItems, setSortedItems] = useState<Array<Item>>(favourites);
    const [searchInput, setSearchInput] = useState<string>('');

    useEffect(() => {
        const filteredItems = favourites.filter(favourite => favourite.title.toLowerCase().includes(searchInput.toLowerCase()));
        searchInput === '' ? setSortedItems([...favourites]) : setSortedItems(filteredItems);
    }, [searchInput, favourites]);
    
    return (
        show ?
        <Container onClick={onClose} data-testid="favourites-list">
            <Wrapper onClick={e => e.stopPropagation()}>
                <SearchBar searchCategory="title" setSearchResult={setSearchInput} />
                {sortedItems && sortedItems.map((item, index) => <ItemModal key={`${item}-${index}`} item={item} />)}
            </Wrapper>
        </Container>
        : null
    );
}