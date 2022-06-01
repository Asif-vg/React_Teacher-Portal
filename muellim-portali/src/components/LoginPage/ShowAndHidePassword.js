import React, {useState} from 'react'
import {FaRegEye,FaRegEyeSlash} from "react-icons/fa"
import Input from "../RegisterPage/Input";
function ShowAndHidePassword() {
    const [passwordType, setPasswordType] = useState("password");
    const togglePassword =()=>{
      if(passwordType==="password")
      {
       setPasswordType("text")
       return;
      }
      setPasswordType("password")
    }
    return(
      <>
        <Input inputType={passwordType}  placeholder={"Şifrəni daxil edin"}  name="password"/>  
        <div className="password-icon" onClick={togglePassword}>{passwordType==="password"? <FaRegEye  className='eye-icon'/> : <FaRegEyeSlash/>} </div>  
      </>
    )
}
export default ShowAndHidePassword;