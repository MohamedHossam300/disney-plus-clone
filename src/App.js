import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/detail' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
