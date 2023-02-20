import React, { useState, useEffect, useCallback, memo } from "react";
import { Item } from "./item";
import { Item as ItemType } from "../items-list-manager";
import { ItemsListContainer, LoadMoreButton } from "./styles";

type ItemListProps = {
  items: Array<ItemType>;
}

export const ItemsList: React.FC<ItemListProps> = memo(({ items }) => {
  const [isVisible, setIsVisible] = useState<number>(5);

  const showMoreItems = useCallback(() => {
    setIsVisible((prevValue) => prevValue + 5);
  }, [setIsVisible]);

  useEffect(() => {
    setIsVisible(5);
  }, [items]);

  return (
    <ItemsListContainer>
        {items && items.slice(0, isVisible).map((item, index) => (
            <Item item={item} key={`${item.title}-${index}`} />
        ))}
        {items.length > isVisible && items.length > 5 && 
          <LoadMoreButton 
            type="button" aria-label="Load more items" 
            data-testid="load-more-button"
            onClick={showMoreItems}
          >
            Load more
          </LoadMoreButton>
        }
    </ItemsListContainer>
  );
});