import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "../../assets/styles/Users.scss";


interface IFormFilterProps {
  isFormOpen: boolean,
  // setIndicator: React.Dispatch<React.SetStateAction<number>>;
}

export const FilterForm = ({ isFormOpen }: IFormFilterProps) => {

  const [organisation, setOrganisation] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [status, setStatus] = React.useState("");


  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log({
      organisation, username,email,date, phoneNumber, status
    })
  }

  return (
      <form className={`${isFormOpen ? "filter_container" : "hide_filter_container"}`} onSubmit={handleFormSubmit}>
        <div className="input_fields_container">
          <label className="organisation_option_box">
            organisation:
            <select name="organisation" onChange={(e) => setOrganisation(e.target.value)} value={organisation}>
              <option>Select</option>
              <option value="org1">Org 1</option>
              <option value="org2">Org 2</option>
            </select>
            <MdOutlineKeyboardArrowDown size={20} color="#213F7D" className="organisation_select_icon" />
          </label>
          <label>
            username:
            <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            email:
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            date:
            <input type="date" name="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} />
          </label>
          <label>
            phone number:
            <input type="text" name="phonenumber" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label className="status_option_box">
            status:
            <select onChange={(e) => setStatus(e.target.value)}>
              <option>Select</option>
              <option value="status1">Status 1</option>
              <option value="status2">Status 2</option>
            </select>
            <MdOutlineKeyboardArrowDown size={20} color="#213F7D" className="status_select_icon" />
          </label>
        </div>
        <div className="filter_btn_container">
          <input type="reset" value="Reset" className="reset_btn" />
          <input type="submit" value="Filter" className="submit_btn" />
        </div>
      </form>

  )
}