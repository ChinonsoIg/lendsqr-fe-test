import React from 'react';
import { Link } from "react-router-dom";

import "../../assets/styles/Login.scss";
import "../../assets/styles/index.scss";
import logo_login from "../../assets/images/logo_login.png";
import pablo_sign_in from "../../assets/images/pablo_sign_in.png";

const Login = () => {

  const [show, setShow] = React.useState(false);

  const handleShow = () => {
    setShow(!show)
  }

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
            <input type="email" placeholder="Email" className="input_shared" />
            <div className="password_container">
              <input type={show ? "text" : "password"} placeholder="Password"></input>
              <span onClick={handleShow}>{show ? "hide" : "show"}</span>
            </div>
          <a href="#/reset_password">Forgot password?</a>
          </div>
          <Link to="/users">
          <button type="submit" className="login_btn">Log in</button>
          </Link>
          
        </form>
      </div>
    </div>
  )
}

export default Login;