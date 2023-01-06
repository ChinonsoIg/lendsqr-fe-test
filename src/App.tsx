import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// import logo from './logo.svg';
// import './assets/styles/App.scss';
import './assets/styles/index.scss';
import Login from './pages/Login';
import SharedLayout from './components/layout/SharedLayout';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}>
            {/* <Route index element={<div>Hello world!</div>} /> */}

          </Route>
          <Route path='users' element={<div>Hello world users!</div>}>
            {/* <Route index element={<Dashboard />} /> */}
            <Route path='users/:userId' element={<div>Hello world! user id</div>} />
          </Route>

          <Route path='products' element={<div>Hello world products!</div>}>
            <Route index element={<div>HProduct!</div>} />
            <Route path=':productId' element={<div>Hello world single product!</div>} />
          </Route>
          <Route path='*' element={<div>Error!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
