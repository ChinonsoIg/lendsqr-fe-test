import React from "react";
import { Link } from "react-router-dom";

import "../../assets/styles/Users.scss"

import three_dots from "../../assets/icons/three_dots.svg";
import view_details from "../../assets/icons/view_details.svg";
import blacklist_user from "../../assets/icons/blacklist_user.svg";
import activate_user from "../../assets/icons/activate_user.svg";


interface IViewUserProps {
  userId: string,
  index: number,
  indicator: number,
  setIndicator: React.Dispatch<React.SetStateAction<number>>;
}

export const ViewUser = ({ userId, index, indicator, setIndicator }: IViewUserProps) => {

  const handleDropdown = () => {
    if (indicator === -1 || indicator !== index) {
      setIndicator(() => index);
    } else {
      setIndicator(-1);
    }
  };

  return (
    <div className="dropdown_container">
      <div className="dropdown_btn_table" onClick={handleDropdown}>
        <img src={three_dots} alt="dots" />
      </div>
      {
        indicator === index ? (
          <div className="dropdown_content_table">
            <div className="view_details">
              <Link to={`/users/${userId}`} className="view_details_link">
                <img src={view_details} className="view_details_icon" alt="view details" />
                <p>View details</p>
              </Link>

            </div>
            <div className="blacklist_user">
              <img src={blacklist_user} className="blacklist_user_icon" alt="blacklist user" />
              <p>Blacklist user</p>
            </div>
            <div className="activate_user">
              <img src={activate_user} className="activate_user_icon" alt="activate user" />
              <p>Activate user</p>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}