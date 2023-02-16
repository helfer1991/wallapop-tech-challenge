import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "../item";

import { Container, LoadMoreButton } from "./styles";

export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

export const ItemsList: React.FC<{ items: Item[] }> = ({ items }) => {
  const [isVisible, setIsVisible] = useState<number>(5);
  const [favourites, setFavourites] = useState<Array<Item>>([]);

  const showMoreItems = () => {
    setIsVisible((prevValue) => prevValue + 5);
  }

  const addToFavourites = (item: Item) => {
    setFavourites(prevFavourites => ([...prevFavourites, item]));
  }

  console.log(favourites);

  return (
    <Container>
      {items && items.slice(0, isVisible).map((item, index) => (
        <Item item={item} key={`${item.title}-${index}`} addToFavourites={() => addToFavourites(item)} />
      ))}
      {items.length - isVisible !== 0 && <LoadMoreButton onClick={showMoreItems}>Load more</LoadMoreButton>}
    </Container>
  );
};