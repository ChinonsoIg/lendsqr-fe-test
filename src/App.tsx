import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './assets/styles/index.scss';
import Login from './pages/Login';
import SharedLayout from './components/layout/SharedLayout';
import Users from './pages/Users';
import SingleUser from './pages/SingleUser';

function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />

          <Route path='users'>
            <Route index element={<Users />} />
            <Route path=':userId' element={<SingleUser />} />
          </Route>

          <Route path='*' element={<div>Error!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
