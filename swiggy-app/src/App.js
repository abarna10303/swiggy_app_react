import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
