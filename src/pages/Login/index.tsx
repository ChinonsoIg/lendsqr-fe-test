import React from 'react';

import "../../assets/styles/Login.scss";
import "../../assets/styles/index.scss";
import logo_login from "../../assets/images/logo_login.png";
import pablo_sign_in from "../../assets/images/pablo_sign_in.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-image-box">
        <img src={logo_login} alt="logo" className="logo_login" />
        <img src={pablo_sign_in} alt="logo" className="pablo_sign_in" />
      </div>
      <div className="login-form-box">
        <div className="title_box">
          <header className="login_title">Welcome!</header>
          <p className="login_subtitle">Enter details to login</p>
        </div>
        <form className="login_form">
          <div className="inputs_box">
            <input type="email" placeholder="Email" />
            {/* <div> */}
              <input type="password" placeholder="Password"></input>
              {/* <span>show</span>
            </div> */}
            <p>Forgot password?</p>
          </div>
          <input type="submit" value="Log in" className="login_btn" />
        </form>
      </div>
    </div>
  )
}

export default Login;