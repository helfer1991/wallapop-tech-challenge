import React, { useState, memo, useEffect } from 'react';

import { Card, UpperWrapper, Image, Title, FavouriteButton, HeartEmpty, HeartFull, Description, Price, Email } from './styles';
import type { Item as ItemType } from '../items-list/items-list';
import { useFavourites } from '../../hooks/useFavourites';

type ItemProps = {
    item: ItemType;
}

export const Item: React.FC<ItemProps> = memo(({ item }) => {
    const { addToFavourites, isItemFavourite, favourites } = useFavourites();
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    const handleFavouriteClick = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        addToFavourites(item);
        setIsFavourite(!isFavourite);
    };

    useEffect(() => {
        setIsFavourite(isItemFavourite(item));
    }, [favourites]);

    return (
        <Card>
            <Image src={item.image} alt="item-image" loading="lazy" />
            <UpperWrapper>
                <Title>{item.title}</Title>
                <FavouriteButton data-testid="add-to-favourites-button" onClick={handleFavouriteClick} disabled={isFavourite}>
                    {isFavourite ? <HeartFull data-testid="icon-heart-full" /> : <HeartEmpty data-testid="icon-heart-empty" />}
                </FavouriteButton>
            </UpperWrapper>
            <Description aria-label="Characteristics">{item.description}</Description>
            <Price>{parseInt(item.price).toLocaleString('de-DE')}€</Price>
            <Email>{item.email}</Email>
        </Card>
    )
});