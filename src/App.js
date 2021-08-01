import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';

//Styles
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      {/* connect styles */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
