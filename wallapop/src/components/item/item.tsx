import React, { useState } from 'react';

import { Card, UpperWrapper, Image, Title, FavouriteButton, HeartEmpty, HeartFull, Description, Price, Email } from './styles';
import type { Item as ItemType } from '../items-list/items-list';

type ItemProps = {
    item: ItemType;
    addToFavourites: (item: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

export const Item: React.FC<ItemProps> = ({ item, addToFavourites }) => {
    const [isFavourite, setIsFavourite] = useState<boolean>(false);

    const handleFavouriteClick = (event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        addToFavourites(event);
        setIsFavourite(!isFavourite);
      };

    return (
        <Card>
            <Image src={item.image} alt="item-image" loading="lazy" />
            <UpperWrapper>
                <Title>{item.title}</Title>
                <FavouriteButton data-testid="button" onClick={handleFavouriteClick} disabled={isFavourite}>{isFavourite ? <HeartFull /> : <HeartEmpty />}</FavouriteButton>
            </UpperWrapper>
            <Description aria-label="Characteristics">{item.description}</Description>
            <Price>{parseInt(item.price).toLocaleString('de-DE')}€</Price>
            <Email>{item.email}</Email>
        </Card>
    )
}