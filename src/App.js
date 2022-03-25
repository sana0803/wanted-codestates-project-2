import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Ranking from './pages/Ranking';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/rank" element={<Ranking />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
