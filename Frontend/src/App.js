import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/detail/:id' element={<Detail />} />
        <Route exact path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
