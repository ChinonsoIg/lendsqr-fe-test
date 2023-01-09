import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/styles/index.scss';
import Login from './pages/Login';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Login />} />
          </Route >

          <Route path='users'>
            <Route index element={<Users />} />
            <Route path=':userId' element={<SingleUser />} />
          </Route>

          <Route path='*' element={<div>Error!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
