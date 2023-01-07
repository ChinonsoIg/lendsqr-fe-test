import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { matchRoutes, useLocation } from "react-router-dom"
import React from 'react';
// import logo from './logo.svg';
// import './assets/styles/App.scss';
import './assets/styles/index.scss';
import Login from './pages/Login';
import SharedLayout from './components/layout/SharedLayout';
import Users from './pages/Users';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Login />} />
        </Route>
        <Route path='/users'>
          <Route index element={<Users />} />
          <Route path=':userId' element={<div>userId</div>} />
        </Route>
        <Route path='*' element={<div>Error!</div>} />
      </Routes>
    </Router>
  );
}

export default App;

