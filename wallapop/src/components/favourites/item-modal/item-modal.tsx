import React from "react";
import { useFavourites } from "../../../hooks/useFavourites";
import { Card, LeftWrapper, Title, Image, RemoveFavouriteButton } from './styles';
import type { Item } from "../../items-list-manager/items-list-manager";

type ItemModalProps = {
    item: Item
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, }) => {
    const { removeFromFavourites } = useFavourites();

    const handleRemove = () => {
        removeFromFavourites(item)
    }

    return (
        <Card data-testid={`${item.title}`}>
            <LeftWrapper>
                <Title>{item.title}</Title>
                <RemoveFavouriteButton onClick={handleRemove} type="button">Remove :(</RemoveFavouriteButton>
            </LeftWrapper>
            <Image src={item.image} alt="favourite-item-image" />
        </Card>
    )
}