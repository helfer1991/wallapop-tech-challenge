import React from 'react';

import { Card, Image } from './styles';

type ItemProps = {
    item: {
        title: string;
        description?: string;
        price?: string;
        email?: string;
        image?: string;
    }
}

export const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <Card>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}€</p>
            <p>{item.email}</p>
            <Image src={item.image} alt="item-image" />
        </Card>
    )
}