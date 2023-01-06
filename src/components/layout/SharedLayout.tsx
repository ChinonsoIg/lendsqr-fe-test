import React from 'react'
// import { Link, Outlet } from 'react-router-dom';

import "../../assets/styles/Layout.scss";
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
  children: React.ReactNode;
}

const SharedLayout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdown, setIsDropdown] = React.useState(false);

  const toggleSidebar = () => {
    console.log("toggle");
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  }

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? "show_sidebar" : "hide_sidebar"}`}>
        <Sidebar closeSidebar={closeSidebar} />
      </div>
      <div className="layout">
        <Topbar toggleSidebar={toggleSidebar} handleDropdown={handleDropdown} 
        isDropdown={isDropdown}  />
        <main className="main">
          {children}
        </main>

      </div>

    </div>
  )
}

export default SharedLayout;