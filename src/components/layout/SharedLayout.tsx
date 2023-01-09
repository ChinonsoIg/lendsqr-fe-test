import React from "react";
import "../../assets/styles/Layout.scss";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

type LayoutProps = {
  children: React.ReactNode;
}

const SharedLayout = ({ children }: LayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdown, setIsDropdown] = React.useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  return (
    <div className="container">
      <Topbar toggleSidebar={toggleSidebar} handleDropdown={handleDropdown}
        isDropdown={isDropdown} />
      <div className="layout">
        <div className={`sidebar ${isOpen ? "show_sidebar" : "hide_sidebar"}`}>
          <Sidebar />
        </div>
        <main className="main">
          {children}
        </main>
      </div>

    </div>
  )
}

export default SharedLayout;