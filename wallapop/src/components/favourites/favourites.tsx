import React, { useState, useEffect } from 'react';

import { SearchBar } from '../search-bar';
import { EmptyState } from '../empty-state';
import { Container, Title, Wrapper } from './styles';
import { ItemModal } from './item-modal';
import { useFavourites } from '../../hooks/useFavourites';

import type { Item } from '../items-list-manager/items-list-manager'

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

    useEffect(() => {
        !show && setSearchInput('');
    }, [show]);

    if(!show) {
        return null;
    }
    
    return (
        <Container onClick={onClose} data-testid="favourites-list">
            <Wrapper onClick={e => e.stopPropagation()}>
                <SearchBar searchCategory="title" setSearchResult={setSearchInput} />
                <Title>Your favourites:</Title>
                {sortedItems.length === 0 ? (
                    searchInput !== '' ? (
                        <EmptyState hasIcon description="Your search had no results. Try again please!" />
                    ) : (
                        <EmptyState hasIcon={false} description="You have no favourites!" />
                    )
                )   : (
                    sortedItems.map((item, index) => <ItemModal key={`${item}-${index}`} item={item} />)
                )}
            </Wrapper>
        </Container>
    );
}