import React from "react";

import { Card, LeftWrapper, Title, Image, RemoveFavouriteButton } from './styles';
import type { Item } from "../../item-list/item-list";

type ItemModalProps = {
    item: Item
    removeFromFavourites: (item: Item) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, removeFromFavourites }) => {

    const handleRemove = () => {
        removeFromFavourites(item)
    }

    return (
        <Card>
            <LeftWrapper>
                <Title>{item.title}</Title>
                <RemoveFavouriteButton onClick={handleRemove}>Remove :(</RemoveFavouriteButton>
            </LeftWrapper>
            <Image src={item.image} loading="lazy" alt="favourite-item-image" />
        </Card>
    )
}