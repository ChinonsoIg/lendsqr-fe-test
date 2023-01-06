import React from 'react'
import SharedLayout from '../../components/layout/SharedLayout';
import "../../assets/styles/Users.scss"

import arrow_back from "../../assets/icons/arrow_back.svg";
import user_details_avatar from "../../assets/icons/user_details_avatar.svg";
import star_full from "../../assets/icons/star_full.svg";
import star_empty from "../../assets/icons/star_empty.svg";

const SingleUser = () => {
  return (
    <SharedLayout>
      <div className="back_button">
        <img src={arrow_back} alt="arrow back" />
        <p>Back to Users</p>
      </div>
      <div className="user_actions">
        <p>User Details</p>
        <div className="btns_container">
          <button className="btn_blacklist">Blacklist user</button>
          <button className="btn_activate">Activate user</button>
        </div>
      </div>
      <div className="user_summary">
        <div className="user_summary_box_one">
          <img src={user_details_avatar} alt="user avatar" className="user_avatar"  />
          <div className="user_name">
            <p>Grace Effiom</p>
            <p>LSQFf587g90</p>
          </div>
          <div className="user_stars_container">
            <p>User&apos;s Tier</p>
            <div >
              <img src={star_full} alt="star full" /><img src={star_empty} alt="star empty" /><img src={star_empty} alt="star empty" />
            </div>
          </div>
          <div className="user_amount">
            <p>₦200,000.00</p>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>

        <div className="user_summary_box_two">
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className="user_details">
        <div className="personal_information">
          <p>Personal Information</p>
          <div className="personal_information_grid">
            <div>
              <p>Full name</p>
              <p>grace effiom</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>07060780922</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>grace@gmail.com</p>
            </div>
            <div>
              <p>BVN</p>
              <p>07060780922</p>
            </div>
            <div>
              <p>Gender</p>
              <p>Female</p>
            </div>
            <div>
              <p>Marital status</p>
              <p>Single</p>
            </div>
            <div>
              <p>Children</p>
              <p>None</p>
            </div>
            <div>
              <p>Type of residence</p>
              <p>Parent&apos;s Apartment</p>
            </div>
          </div>
        </div>
        <div className="education_and_employment">
          <p>Education and Employment</p>
          <div className="education_and_employment_grid">
            <div>
              <p>level of education</p>
              <p>B.Sc</p>
            </div>
            <div>
              <p>employment status</p>
              <p>Employed</p>
            </div>
            <div>
              <p>sector of employment</p>
              <p>FinTech</p>
            </div>
            <div>
              <p>Duration of employment</p>
              <p>2 years</p>
            </div>
            <div>
              <p>office email</p>
              <p>grace@lendsqr.com</p>
            </div>
            <div>
              <p>Monthly income</p>
              <p>₦200,000.00- ₦400,000.00</p>
            </div>
            <div>
              <p>loan repayment</p>
              <p>40,000</p>
            </div>
          </div>
        </div>
        <div className="socials">
          <p>Socials</p>
          <div className="socials_grid">
            <div>
              <p>Twitter</p>
              <p>@grace_effiom</p>
            </div>
            <div>
              <p>Facebook</p>
              <p>Grace Effiom</p>
            </div>
            <div>
              <p>Instagram</p>
              <p>@grace_effiom</p>
            </div>
          </div>
        </div>

        <div className="guarantor">
          <p>Guarantor</p>
          <div className="guarantor_grid">
            <div>
              <p>full Name</p>
              <p>Debby Ogana</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>07060780922</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>debby@gmail.com</p>
            </div>
            <div>
              <p>Relationship</p>
              <p>Sister</p>
            </div>
          </div>
        </div>
        <div className="no_heading">
          <p></p>
          <div className="no_heading_grid">
            <div>
              <p>full Name</p>
              <p>Debby Ogana</p>
            </div>
            <div>
              <p>Phone Number</p>
              <p>07060780922</p>
            </div>
            <div>
              <p>Email Address</p>
              <p>debby@gmail.com</p>
            </div>
            <div>
              <p>Relationship</p>
              <p>Sister</p>
            </div>

          </div>
        </div>

      </div>
    </SharedLayout>
  )
}

export default SingleUser;