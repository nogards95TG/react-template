import React, { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';
import Pagina1 from './pages/Pagina1';

const App: FC = () => {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>} ></Route>
      <Route path='/pagina1' element={<Pagina1></Pagina1>} ></Route>
    </Routes>
  </BrowserRouter>
}

export default App;
