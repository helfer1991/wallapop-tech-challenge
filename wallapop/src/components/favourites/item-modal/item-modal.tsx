import React from "react";
import { useFavourites } from "../../../hooks/useFavourites";
import { Card, LeftWrapper, Title, Image, RemoveFavouriteButton } from './styles';
import type { Item } from "../../items-list/item-list/item-list";

type ItemModalProps = {
    item: Item
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, }) => {
    const { removeFromFavourites } = useFavourites();

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