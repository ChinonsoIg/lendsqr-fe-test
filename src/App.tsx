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
        <Route path='/' element={<Dashboard />}>
          <Route index element={<div>Hello world!</div>} />

          {/* <Route path='users' element={<div>Hello world users!</div>}> */}
            {/* <Route index element={<Dashboard />} /> */}
            {/* <Route path=':userId' element={<div>Hello world! user id</div>} /> */}
          {/* </Route> */}

          <Route path='*' element={<div>Error!</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
