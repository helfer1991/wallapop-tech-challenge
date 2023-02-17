import React, { useState } from 'react';

import type { Item } from '../items-list/items-list'

import { SearchBar } from '../search-bar';

import { Container, Wrapper } from './styles';

import { ItemModal } from './item-modal';

type FavouritesProps = {
    items?: Array<Item>;
    show: boolean;
    onClose: (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Favourites: React.FC<FavouritesProps> = ({ items, show, onClose }) => {
    return (
        show ?
        <Container onClick={onClose}>
            <Wrapper onClick={e => e.stopPropagation()}>
                <SearchBar searchCategory="title" />
                {items && items.map((item) => <ItemModal title={item.title} image={item.image} />)}
            </Wrapper>
        </Container>
        : null
    );
}