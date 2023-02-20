import React from 'react';
import { ItemsListManager } from './components/items-list-manager';
import { Header } from './components/header/header';
import { Footer } from './components/footer';
import { Container} from './styles';

function App() {
  return (
    <Container>
      <Header />
      <ItemsListManager />
      <Footer />
    </Container>
  );
}

export default App;
