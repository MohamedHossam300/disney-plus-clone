import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<><Header /><Home /></>} />
        <Route exact path='/detail/:id' element={<><Header /><Detail /></>} />
        <Route exact path='/login' element={<><Header /><Login /></>} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/signin' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
