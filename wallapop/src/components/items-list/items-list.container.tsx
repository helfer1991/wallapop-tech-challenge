import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ItemsList } from './items-list';

export type Item = {
    title: string;
    description: string;
    price: string;
    email: string;
    image: string;
  }

export const ItemsListContainer: React.FC = () => {
    const [items, setItems] = useState<Array<Item>>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
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
      return <p>loading...</p>
    }

    return (
        <ItemsList items={items} />
    );
};