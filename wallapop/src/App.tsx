import React from 'react';
import { ItemsList } from './components/items-list';
import { Header } from './components/header/header';
import { Footer } from './components/footer';
import { Container} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <ItemsList />
      <Footer />
    </Container>
  );
}

export default App;
