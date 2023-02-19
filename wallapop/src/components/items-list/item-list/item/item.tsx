import React, { useState, memo, useEffect } from 'react';

import { Card, TextWrapper, UpperWrapper, Image, Title, FavouriteButton, HeartEmpty, HeartFull, Description, Price, Email } from './styles';
import type { Item as ItemType } from '../../items-list';
import { useFavourites } from '../../../../hooks/useFavourites';

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
        <Card data-testid={`${item.title}`}>
            <Image src={item.image} alt="item-image" loading="lazy" />
            <TextWrapper>
                <UpperWrapper>
                    <Title>{item.title}</Title>
                    <FavouriteButton
                        data-testid="add-to-favourites-button"
                        onClick={handleFavouriteClick}
                        aria-label="Favourites list"
                        type="button"
                        disabled={isFavourite}
                    >
                        {isFavourite ? <HeartFull data-testid="icon-heart-full" /> : <HeartEmpty data-testid="icon-heart-empty" />}
                    </FavouriteButton>
                </UpperWrapper>
                <Description>{item.description}</Description>
                <Price>{parseInt(item.price).toLocaleString('de-DE')}€</Price>
                <Email>{item.email}</Email>
            </TextWrapper>
        </Card>
    )
});