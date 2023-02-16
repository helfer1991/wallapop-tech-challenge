import React, { useState, useEffect } from 'react';
import './App.scss';
import { ItemsList } from './components/items-list';
import { Header } from './components/header/header';
import axios from "axios";

export type Item = {
  title: string;
  description: string;
  price: string;
  email: string;
  image: string;
}

function App() {
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
    return <p>loading</p>
  }

  return (
    <div className="App">
      <Header />
      <ItemsList items={items} />
    </div>
  );
}

export default App;
