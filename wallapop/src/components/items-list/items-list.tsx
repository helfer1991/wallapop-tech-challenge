import React, { useState, useEffect } from "react";
import axios from "axios";
import { Item } from "../item";

import { Container, LoadMoreButton } from "./styles";

type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
}

export const ItemsList: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<number>(5);

  useEffect(() => {
    const fetchItems = async () => {
        try {
            const response = await axios.get<{items: Item[]}>(
                "https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json"
              );
              setItems(response.data.items);
        } catch(error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    } 
    fetchItems();
  }, []);

  if(loading) {
    return <p>loading</p>
  }

  const showMoreItems = () => {
    setIsVisible((prevValue) => prevValue + 5);
  }

  return (
    <Container>
      {items && items.slice(0, isVisible).map((item, index) => (
        <Item item={item} key={`${item.title}-${index}`} />
      ))}
      {items.length - isVisible !== 0 && <LoadMoreButton onClick={showMoreItems}>Load more</LoadMoreButton>}
    </Container>
  );
};