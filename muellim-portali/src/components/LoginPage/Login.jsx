import React from 'react';
import Input from "../RegisterPage/Input";
import FormButton from "../RegisterPage/FormButton";
import ShowAndHidePassword from "./ShowAndHidePassword";
import loginLogo from "../../assets/images/loginLogo.png";

function Login() {
  return (
    <div className='login-page'>
    <div className="login-page-opacity"></div>
      <div className='login-platform'>
        <div className="login-platform-opacity"></div>
        <div className="login-logo">
          <img src={loginLogo} alt="Login Logo" />
        </div>
        <div className="login-header">
          <h3 className='log-head'>Müəllim Portalı</h3>
        </div>
        <div className="login-form">
          <Input inputType={"email"} placeholder={"E-mailinizi daxil edin"}/>
          <div className="password-input"><ShowAndHidePassword/></div>
          <FormButton buttonText={"Daxil olun"}/>
      </div>
    </div>
  </div>
  )
}
export default Login;