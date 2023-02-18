import React, { useState, useEffect, useCallback } from "react";
import { Item } from "../item";


import { ItemsListContainer, LoadMoreButton } from "./styles";

export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

type ItemListProps = {
  items: Array<Item>;
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  const [isVisible, setIsVisible] = useState<number>(5);

  const showMoreItems = useCallback(() => {
    setIsVisible((prevValue) => prevValue + 5);
  }, [isVisible]);

  useEffect(() => {
    setIsVisible(5);
  }, [items]);

  return (
    <ItemsListContainer>
        {items && items.slice(0, isVisible).map((item, index) => (
            <Item item={item} key={`${item.title}-${index}`} />
        ))}
        {items.length - isVisible !== 0 && items.length > 5 && <LoadMoreButton data-testid="load-more-button" onClick={showMoreItems}>Load more</LoadMoreButton>}
    </ItemsListContainer>
  );
};