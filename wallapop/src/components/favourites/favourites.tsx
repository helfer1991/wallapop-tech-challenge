import React, { useState } from 'react';

import type { Item } from '../items-list/items-list'

import { Container, Wrapper } from './styles';

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
                <p>cenas</p>
            </Wrapper>
        </Container>
        : null
    );
}