import React from 'react';

import { Card, UpperWrapper, Image, Title, Description, Price, Email } from './styles';
import type { Item as ItemType } from '../items-list/items-list';

type ItemProps = {
    item: {
        title: string;
        description?: string;
        price: string;
        email?: string;
        image?: string;
    },
    addToFavourites: (item: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Item: React.FC<ItemProps> = ({ item, addToFavourites }) => {
    return (
        <Card>
            <Image src={item.image} alt="item-image" loading="lazy" />
            <UpperWrapper>
                <Title>{item.title}</Title>
                <button onClick={addToFavourites}>add</button>
            </UpperWrapper>
            <Description aria-label="Characteristics">{item.description}</Description>
            <Price>{parseInt(item.price).toLocaleString('de-DE')}€</Price>
            <Email>{item.email}</Email>
        </Card>
    )
}