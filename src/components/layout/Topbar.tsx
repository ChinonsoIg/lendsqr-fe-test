import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";

import "../../assets/styles/Layout.scss"
import avatar from "../../assets/icons/avatar.svg";
import searchIcon from "../../assets/icons/searchIcon.png";
import logo from "../../assets/icons/logo.svg";

type TopbarProps = {
  toggleSidebar: () => void;
  handleDropdown: () => void;
  isDropdown: boolean;
}

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar, handleDropdown, isDropdown }) => {

  return (
    <div className="topbar_container">
      <div className="sidebar_toggle" onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </div>
      <img src={logo} alt="logo" className="logo" />
      <div className="topbar_right_container">

        <div className="topbar_input_box">
          <input className="topbar_input" placeholder="Search for anything" />
          <img src={searchIcon} className="topbar_input_icon" alt="search icon" />
        </div>
        <div className="topbar_profile_box">
          <p className="topbar_box_docs">Docs</p>
          <IoIosNotificationsOutline size={26} className="notifications" />
          <div className="user_profile">
            <img src={avatar} alt="avatar bell" className="avatar" />
            <p>Adedeji</p>
            <RiArrowDropDownFill size={24} />
          </div>
        </div>

        <div className="topbar_profile_box_mobile">
          <div className="dropdown_btn" onClick={handleDropdown}>
            <img src={avatar} alt="avatar bell" className="avatar" />
            <RiArrowDropDownFill size={24} />
          </div>
          {
            isDropdown ? (
              <div className={"dropdown_content_mobile"}>
                <p className="topbar_box_docs">Docs</p>
                <p className="topbar_box_docs">Notifications</p>
                <div className="topbar_input_box_mobile">
                  <input className="topbar_input" placeholder="Search for anything" />
                  <img src={searchIcon} className="topbar_input_icon" alt="search icon" />
                </div>
              </div>
            ) : null
          }
        </div>
      </div>

    </div>
  )
}

export default Topbar;
