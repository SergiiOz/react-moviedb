//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//Styles
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      {/* connect styles */}
      <GlobalStyle />
      {/* connect styles */}

      <Header />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
