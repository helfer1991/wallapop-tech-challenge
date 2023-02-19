import React, { useState, useEffect } from 'react';
import { ItemsList } from './components/items-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer';
import axios from "axios";
import { Container} from './styles';

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
    return <p>loading...</p>
  }

  return (
    <Container>
      <Header />
      <ItemsList items={items} />
      <Footer />
    </Container>
  );
}

export default App;
